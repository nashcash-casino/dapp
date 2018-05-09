import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'

import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default () => (
  <Container>
    <Helmet>
      <link rel='canonical' href='https://nashcash.casino' />
    </Helmet>
    <div className='flex flex-column tc mb4'>
      <img className='w5 center mt5 mb4' src='/logo.svg' />
      <Link to='/claim-chip'>
        <Button>Claim Chip</Button>
      </Link>
    </div>
    <p className='f4 lh-copy measure-narrow center'>
      The NashCash Casino is an experiential artwork on display at the{' '}
      <a
        className='link b dark-red'
        href='https://knockdown.center/'
        target='_blank'
      >
        Knockdown Center
      </a>{' '}
      during{' '}
      <a
        className='link b dark-red'
        href='https://etherealsummit.com/arts-grant/'
        target='_blank'
      >
        Ethereal NY 2018.
      </a>
    </p>
    <p className='f4 lh-copy measure-narrow center'>
      The installation utilizes disorienting atmosphere, live actors, game
      theory, and{' '}
      <a
        className='link b dark-red'
        href='https://etherscan.io/address/0xdc1d53dc4f8e44c2fabe22e76236bcdffab77124'
        target='_blank'
      >
        Ethereum smart-contracts.
      </a>
    </p>
    <p className='f4 lh-copy measure-narrow center'>
      Participants are challenged to consider their incentives via interaction
      with abstractions of value, fellow players, and the digital nether.
    </p>
  </Container>
)
