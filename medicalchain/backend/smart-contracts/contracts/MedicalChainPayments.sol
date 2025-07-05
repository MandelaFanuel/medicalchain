// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract MedicalChainPayments is ReentrancyGuard, AccessControl {
    using EnumerableSet for EnumerableSet.AddressSet;

    bytes32 public constant PAYMENT_ADMIN_ROLE = keccak256("PAYMENT_ADMIN_ROLE");
    bytes32 public constant SUPER_ADMIN_ROLE = keccak256("SUPER_ADMIN_ROLE");
    
    uint256 public requiredConfirmations = 2;
    uint256 public requestCount;

    struct PaymentRequest {
        address recipient;
        uint256 amount;
        EnumerableSet.AddressSet confirmers;
        bool executed;
        uint256 creationTimestamp;
    }
    
    mapping(uint256 => PaymentRequest) private requests;
    mapping(address => uint256) private balances;

    event PaymentRequestCreated(uint256 indexed requestId, address indexed recipient, uint256 amount);
    event PaymentConfirmed(uint256 indexed requestId, address indexed confirmer);
    event PaymentExecuted(uint256 indexed requestId, address indexed recipient, uint256 amount);
    event BalanceDeposited(address indexed depositor, uint256 amount);

    constructor() {
        _grantRole(SUPER_ADMIN_ROLE, msg.sender);
        _grantRole(PAYMENT_ADMIN_ROLE, msg.sender);
        _setRoleAdmin(PAYMENT_ADMIN_ROLE, SUPER_ADMIN_ROLE);
    }

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be positive");
        balances[msg.sender] += msg.value;
        emit BalanceDeposited(msg.sender, msg.value);
    }

    // Fonction receive pour accepter les transferts ETH simples
    receive() external payable {
        balances[msg.sender] += msg.value;
        emit BalanceDeposited(msg.sender, msg.value);
    }

    // Fonction fallback pour gérer les appels non reconnus
    fallback() external payable {
        revert("Invalid function call");
    }

    function createPaymentRequest(address recipient, uint256 amount) 
        external 
        onlyRole(PAYMENT_ADMIN_ROLE) 
        returns (uint256) 
    {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be positive");
        
        uint256 requestId = requestCount++;
        PaymentRequest storage newRequest = requests[requestId];
        newRequest.recipient = recipient;
        newRequest.amount = amount;
        newRequest.creationTimestamp = block.timestamp;

        emit PaymentRequestCreated(requestId, recipient, amount);
        return requestId;
    }

    function confirmPayment(uint256 requestId) external onlyRole(PAYMENT_ADMIN_ROLE) {
        require(requestId < requestCount, "Invalid request ID");
        PaymentRequest storage request = requests[requestId];
        
        require(!request.executed, "Payment already executed");
        require(!request.confirmers.contains(msg.sender), "Already confirmed");

        request.confirmers.add(msg.sender);
        emit PaymentConfirmed(requestId, msg.sender);

        if (request.confirmers.length() >= requiredConfirmations) {
            _executePayment(requestId);
        }
    }

    function _executePayment(uint256 requestId) internal nonReentrant {
        PaymentRequest storage request = requests[requestId];
        require(!request.executed, "Already executed");
        require(request.confirmers.length() >= requiredConfirmations, "Insufficient confirmations");

        request.executed = true;
        (bool success, ) = request.recipient.call{value: request.amount}("");
        require(success, "Transfer failed");

        emit PaymentExecuted(requestId, request.recipient, request.amount);
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }

    function getRequestDetails(uint256 requestId) 
        external 
        view 
        returns (
            address recipient,
            uint256 amount,
            uint256 confirmations,
            bool executed,
            uint256 timestamp
        ) 
    {
        PaymentRequest storage request = requests[requestId];
        return (
            request.recipient,
            request.amount,
            request.confirmers.length(),
            request.executed,
            request.creationTimestamp
        );
    }

    function setRequiredConfirmations(uint256 newRequiredConfirmations) 
        external 
        onlyRole(SUPER_ADMIN_ROLE) 
    {
        require(newRequiredConfirmations > 0, "At least 1 confirmation required");
        requiredConfirmations = newRequiredConfirmations;
    }
}