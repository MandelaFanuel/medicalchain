// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Récupérer le contrat à déployer
  const MedicalChainPayments = await hre.ethers.getContractFactory("MedicalChainPayments");
  
  // Déployer le contrat
  console.log("⏳ Déploiement du contrat MedicalChainPayments...");
  const medicalChain = await MedicalChainPayments.deploy();
  
  // Attendre la confirmation du déploiement
  await medicalChain.waitForDeployment();
  
  // Récupérer l'adresse du contrat
  const contractAddress = await medicalChain.getAddress();
  
  // Afficher les résultats
  console.log("\n✅ Contrat déployé avec succès !");
  console.log("📌 Adresse du contrat:", contractAddress);
  console.log("🔗 Lien Etherscan:", `https://sepolia.etherscan.io/address/${contractAddress}`);
  
  console.log("\n📝 Ajoutez ces variables à votre .env :");
  console.log(`CONTRACT_ADDRESS=${contractAddress}`);
  console.log(`REACT_APP_CONTRACT_ADDRESS=${contractAddress}`);
}

// Gestion des erreurs
main().catch((error) => {
  console.error("❌ Erreur lors du déploiement:", error);
  process.exitCode = 1;
});