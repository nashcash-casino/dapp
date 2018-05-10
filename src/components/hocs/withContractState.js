import React, { Component } from 'react'
import getWeb3 from '../../util/getWeb3'
import ChipTreasury from '../../artifacts/ChipTreasury.json'

module.exports = function (Cmp) {
  return class ContractStateHOC extends Component {
    state = {
      numChips: 500,
      chipValue: 0.01,
      unclaimedChipIds: []
    }

    async componentDidMount () {
      const web3 = await getWeb3()
      const web3Contract = new web3.eth.Contract(
        ChipTreasury.abi,
        process.env.CONTRACT_ADDRESS
      )
      this.setState({
        numChips: Number(await web3Contract.methods.getNumChips().call()),
        chipValue: Number(
          web3.utils.fromWei(
            await web3Contract.methods.getChipValue().call(),
            'ether'
          )
        ),
        unclaimedChipIds: await web3Contract.methods.getChipIds(false).call()
      })
    }

    render () {
      return <Cmp {...this.state} />
    }
  }
}
