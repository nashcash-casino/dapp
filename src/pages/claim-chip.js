import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import { Timeline } from 'react-twitter-widgets'

import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import withContractState from '../components/hocs/withContractState'

class TimelineFix extends PureComponent {
  render () {
    return <Timeline {...this.props} />
  }
}

const ClaimChip = ({ chipValue, numChips }) => (
  <Container>
    <Helmet>
      <title>Claim Chip</title>
      <link rel='canonical' href='https://nashcash.casino/claim-chip' />
    </Helmet>
    <div className='measure center mt5'>
      <h1 className='f1 f-subheadline-ns'>Claim Chip</h1>
      <div className='flex flex-column flex-row-ns justify-between'>
        <h2 className='f4 lh-copy mv0'>
          <label>Chip Value: </label>
          {chipValue.toFixed(2)} ETH
        </h2>
        <h2 className='f4 lh-copy mv0'>
          <label>Chips Unclaimed: </label>
          {numChips}
        </h2>
      </div>
      <p className='f4 lh-copy'>
        Congratulations on receiving a chip!
        <br />
        Follow the prompts below to claim your free ETH.
      </p>
      <Link to='/claim-chip/manually'>
        <Button className='flex-auto mb3 w-100'>Claim Manually</Button>
      </Link>
      {/* <div className='flex flex-column mb2'>
        <label className='f4 lh-copy mb3'>Which Etheruem wallet do you use?</label>
        <Link to='/claim-chip/with-metamask'>
          <Button className='flex-auto mb3 w-100'>MetaMask / None</Button>
        </Link>
        <Link to='/claim-chip/manually'>
          <Button className='flex-auto mb3 w-100'>Ledger / Trezor</Button>
        </Link>
        <Link to='/claim-chip/manually'>
          <Button className='flex-auto mb3 w-100 f6 f5-ns'>MyCrypto / MEW / Other</Button>
        </Link>
      </div> */}
      <TimelineFix
        dataSource={{
          sourceType: 'profile',
          screenName: 'nashcash_casino'
        }}
        options={{
          username: 'NashCash Casino',
          height: '600',
          chrome: 'noheader nofooter noborders noscrollbar'
        }}
      />
    </div>
  </Container>
)

ClaimChip.defaultProps = {
  chipValue: 0.01,
  numChips: 500,
  unclaimedChipIds: []
}

export default withContractState(ClaimChip)
