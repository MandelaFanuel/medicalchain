// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract MedicalRecords {
    struct Record {
        string patientId;
        string encryptedData;
    }

    // Mapping pour stocker les dossiers par adresse patient
    mapping(address => Record[]) private patientRecords;

    // Événement pour suivre les ajouts
    event RecordAdded(address indexed patient, string patientId);

    // Ajouter un dossier médical
    function addRecord(string memory _patientId, string memory _encryptedData) public {
        patientRecords[msg.sender].push(Record(_patientId, _encryptedData));
        emit RecordAdded(msg.sender, _patientId);
    }

    // Récupérer les dossiers d'un patient
    function getRecords(address _patient) public view returns (Record[] memory) {
        return patientRecords[_patient];
    }
}