// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  
  const nftContract = await ethers.getContractFactory("NFT");

  // deploy contract
  const deployedNFTContract = await nftContract.deploy();
  
  // wait for contract to deploy
  await deployedNFTContract.deployed();

  // print address of the deployed contract
  console.log("NFT Contract Address:", deployedNFTContract.address);

// Call the main function to check for error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

  // transaction hash for mint
  0x3b1640a0af05952d3790237e879e18a65c30d306d71f3c3e884622502295add3
  // NFT Contract Address: 0x12F3a3F8700e8732af36167B1dD1E8d5FC6D91d3
  // link to opensea testnet
  https://testnets.opensea.io/assets/rinkeby/0x12f3a3f8700e8732af36167b1dd1e8d5fc6d91d3/1