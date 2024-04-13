
// require("solidity-coverage");
//require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");

//https://hardhat.org/plugins/hardhat-gas-reporter.html
// require("hardhat-contract-sizer");
// require("hardhat-gas-reporter");

const env = require('./.env.json');
// const accounts = require('./accounts.json');

module.exports = {
  etherscan: {
    apiKey: {
      mainnet: env.ETHERSCAN_API_KEY
    }
  },
  sourcify: {
    enabled: true
  },
  mocha: {
    timeout: 20000
  },
  paths: {
    artifacts: "./artifacts",
    cache:     "./cache",
    sources:   "./contracts",
    tests:     "./test",
  },
  solidity: {
    settings: env.COMPILER_SETTINGS,
    version: env.COMPILER_VERSION,
  },
  // ref: https://hardhat.org/hardhat-network/docs/reference
  networks: {
    hardhat: {
      // accounts: accounts,
      forking: {
        enabled: true,
        // url: `https://mainnet.infura.io/v3/${env.INFURA.PROJECT_ID}`
        url: 'https://mainnet.base.org'
      },
    },

    "base-sepolia": {
      url: 'https://sepolia.base.org',
      accounts: [ env.ACCOUNTS.xxx.PK ],
      // gasPrice: 100_000_000,
    },
    "base-mainnet": {
      url: 'https://mainnet.base.org',
      accounts: [ env.ACCOUNTS.xxx.PK ],
      // gasPrice: 100_000_000,
    },

    "blast-mainnet": {
      // Block Explorer: https://blastscan.io
      chainId:  81457,
      url: `https://rpc.blast.io`,
      accounts: [
        env.ACCOUNTS.xxx.PK,
      ]
    },
    "blast-sepolia": {
      // Block Explorer: https://testnet.blastscan.io
      chainId: 168587773,
      url: `https://sepolia.blast.io`,
      accounts: [
        env.ACCOUNTS.xxx.PK,
      ]
    }
  },
  contractSizer: {
    runOnCompile: false
  },
};
