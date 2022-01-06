require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "dummy_url [insert your Alchemy API URL here]",
      accounts: ['insert your wallet private key here!!']

    }
  }
}