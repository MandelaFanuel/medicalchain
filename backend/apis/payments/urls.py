from django.urls import path
from .views import (
    PaymentCreateView,
    PaymentListView,
    WalletDetailView,
    DepositToWalletView,
    TransactionHistoryView,
    BlockchainPaymentView,
    VerifyBlockchainPaymentView,
)

urlpatterns = [
    path("api/payment/create/", PaymentCreateView.as_view(), name="payment-create"),
    path("api/payments/", PaymentListView.as_view(), name="payment-list"),
    path("api/wallet/", WalletDetailView.as_view(), name="wallet-detail"),
    path("api/wallet/deposit/", DepositToWalletView.as_view(), name="wallet-deposit"),
    path(
        "api/transactions/",
        TransactionHistoryView.as_view(),
        name="transaction-history",
    ),
    path(
        "api/payment/blockchain/",
        BlockchainPaymentView.as_view(),
        name="blockchain-payment",
    ),
    path(
        "api/payment/verify/",
        VerifyBlockchainPaymentView.as_view(),
        name="verify-blockchain-payment",
    ),
]
