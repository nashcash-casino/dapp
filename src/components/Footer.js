import React from 'react'
import FaGithub from 'react-icons/lib/fa/github-alt'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaMail from 'react-icons/lib/md/email'

import Container from './ui/Container'

const Footer = () => (
  <footer className='mt5 pv4 tc bg-dark-red'>
    <Container>
      <div className='flex justify-between items-center'>
        <div className='f7'>
          © {(new Date()).getFullYear()} NashCash Casino
        </div>
        <div>
          <a className='link near-white dim f3 f2-ns pr3' href='https://github.com/nashcash-casino' target='_blank'>
            <FaGithub />
          </a>
          <a className='link near-white dim f3 f2-ns pr3' href='https://twitter.com/nashcash_casino' target='_blank'>
            <FaTwitter />
          </a>
          <a className='link near-white dim f3 f2-ns' href='mailto:contact@nashcash.casino' target='_blank'>
            <FaMail />
          </a>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
