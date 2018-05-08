import React from 'react'
import { Helmet } from 'react-helmet'
import FaGithub from 'react-icons/lib/fa/github-alt'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedIn from 'react-icons/lib/fa/linkedin'
import FaMail from 'react-icons/lib/md/email'

import Container from '../components/ui/Container'

export default () => (
  <Container>
    <Helmet>
      <link rel='canonical' href='https://nashcash.casino/team' />
    </Helmet>
    <div className='measure center mt5'>
      <h1 className='f1 f-subheadline-ns'>Team</h1>
    </div>
    <ul className='list pl0 mt0 measure center'>
      <li className='flex justify-between items-center lh-copy ph2 pv3 ph0-l bb b--white-50'>
        <img className='w2 h2 w3-ns h3-ns br-100' src='/brian.jpg' />
        <div className='pl3 flex-auto'>
          <span className='f4 db white'>Brian Gruber</span>
          <span className='f6 db white'>Creative Director</span>
        </div>
        <div className='tr'>
          <a
            className='white dim f4 pr2'
            href='https://www.linkedin.com/in/bpatrickgruber'
            target='_blank'
          >
            <FaLinkedIn />
          </a>
          <a
            className='white dim f4'
            href='mailto:brian@nashcash.casino'
            target='_blank'
          >
            <FaMail />
          </a>
        </div>
      </li>
      <li className='flex justify-between items-center lh-copy ph2 pv3 ph0-l bb b--white-50'>
        <img className='w2 h2 w3-ns h3-ns br-100' src='/hollis.jpg' />
        <div className='pl3 flex-auto'>
          <span className='f4 db white'>Hollis Witherspoon</span>
          <span className='f6 db white'>Writer, Actress</span>
        </div>
        <div>
          <div className='flex flex-row justify-end items-center'>
            <a
              className='white dim f4'
              href='mailto:hollis.witherspoon@gmail.com'
              target='_blank'
            >
              <FaMail />
            </a>
          </div>
          <a
            href='http://holliswitherspoon.com/'
            target='_blank'
            className='f6 link white underline dim'
          >
            holliswitherspoon.com
          </a>
        </div>
      </li>
      <li className='flex justify-between items-center lh-copy ph2 pv3 ph0-l bb b--white-50'>
        <img className='w2 h2 w3-ns h3-ns br-100' src='/grayson.jpg' />
        <div className='pl3 flex-auto'>
          <span className='f4 db white'>Grayson Cox</span>
          <span className='f6 db white'>Visual Artist</span>
        </div>
        <div>
          <div className='flex flex-row justify-end items-center'>
            <a
              className='white dim f4 pr2'
              href='https://twitter.com/Graysonsan'
              target='_blank'
            >
              <FaTwitter />
            </a>
            <a
              className='white dim f4'
              href='mailto:grayson@nashcash.casino'
              target='_blank'
            >
              <FaMail />
            </a>
          </div>
          <a
            href='http://graysoncox.com'
            target='_blank'
            className='f6 link white underline dim'
          >
            graysoncox.com
          </a>
        </div>
      </li>
      <li className='flex justify-between items-center lh-copy ph2 pv3 ph0-l bb b--white-50'>
        <img className='w2 h2 w3-ns h3-ns br-100' src='/ron.jpg' />
        <div className='pl3 flex-auto'>
          <span className='f4 db white'>YFR</span>
          <span className='f6 db white'>Technical Lead</span>
        </div>
        <div>
          <div className='flex flex-row justify-end items-center'>
            <a
              className='white dim f4 pr2'
              href='https://github.com/rongierlach'
              target='_blank'
            >
              <FaGithub />
            </a>
            <a
              className='white dim f4 pr2'
              href='https://twitter.com/youfoundron'
              target='_blank'
            >
              <FaTwitter />
            </a>
            <a
              className='white dim f4'
              href='mailto:ron@nashcash.casino'
              target='_blank'
            >
              <FaMail />
            </a>
          </div>
          <a
            href='https://youfoundron.com'
            target='_blank'
            className='f6 link white underline dim'
          >
            youfoundron.com
          </a>
        </div>
      </li>
    </ul>
  </Container>
)
