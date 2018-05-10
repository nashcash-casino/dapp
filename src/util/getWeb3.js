import Web3 from 'web3'
import getCurrentProvider from './getCurrentProvider'

let _web3

// singleton that returns an instantiated web3 instance
module.exports = () => {
  if (_web3) {
    return _web3
  }
  const currentProvider = getCurrentProvider()

  _web3 = new Web3(currentProvider)
  window.web3 = _web3
  return _web3
}
