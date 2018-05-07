import React from 'react'
import Link from 'gatsby-link'

import Container from './ui/Container'

const Header = () => (
  <header className='pv3 pv4-ns bg-dark-red'>
    <Container className='flex flex-row justify-between align-center'>
      <Link className='link tl b near-white ttu tracked hover-near-black' to='/'>
        Home
      </Link>
      <nav >
        <Link className='link tr pl3 b near-white ttu tracked hover-near-black' to='/team'>Team</Link>
        <Link className='link tr pl3 b near-white ttu tracked hover-near-black' to='/games'>Games</Link>
        <Link className='link tr pl3 b near-white ttu tracked hover-near-black' to='/claim-chip'>Claim</Link>
      </nav>
    </Container>
  </header>
)

export default Header
