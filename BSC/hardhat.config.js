require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");

const {
  RINKEBY_ALCHEMY_URL,
  PROD_ALCHEMY_URL,
  BSCTEST_MORALIS_URL,
  PRIVATE_KEY,
} = process.env;
const { mnemonic, bscscanApiKey } = require("./secrets.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    // const balance = await web3.eth.getBalance(
    //   web3.utils.toChecksumAddress(account.address)
    // );

    // console.log(
    //   `${account.address}, ${web3.utils.fromWei(balance, "ether")} ETH`
    // );

    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "bscTestnet",
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        // runs: 200,
      },
    },
  },
  networks: {
    rinkeby: {
      url: RINKEBY_ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ethMainnet: {
      chainId: 1,
      url: PROD_ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bscTestnet: {
      chainId: 97,
      url: BSCTEST_MORALIS_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    url: "https://testnet.bscscan.com/",
    apiKey: bscscanApiKey,
  },
};
