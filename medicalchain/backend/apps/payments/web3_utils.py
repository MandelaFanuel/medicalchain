from web3 import Web3
from django.conf import settings


def get_web3():
    """
    Initialise une connexion Web3 avec le fournisseur configuré
    """
    return Web3(Web3.HTTPProvider(settings.WEB3_PROVIDER_URI))


def get_contract():
    """
    Retourne une instance du contrat intelligent
    """
    web3 = get_web3()
    contract = web3.eth.contract(
        address=settings.CONTRACT_ADDRESS, abi=settings.CONTRACT_ABI
    )
    return contract
