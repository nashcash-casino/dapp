module.exports = () =>
  typeof web3 !== 'undefined'
    ? // Injected Web3 detected. Use Mist/MetaMask's provider.
    window.web3.currentProvider
    : // No web3 detected. Use ya silver bullet.
    process.env.WS_PROVIDER
