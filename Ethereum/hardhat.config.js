require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const { RINKEBY_ALCHEMY_URL, PROD_ALCHEMY_URL, PRIVATE_KEY } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
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
  },
  etherscan: {
    url: "https://rinkeby.etherscan.io",
    apiKey: "EPIBE7GXCNQEE6P4CFGDUN1DCZHP4IAVHT",
  },
};
