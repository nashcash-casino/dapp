import React from 'react'
import { BodyClass } from 'react-extras'

import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className='flex flex-column flex-auto min-vh-100 sans-serif near-white bg-near-black'>
    <BodyClass add='bg-near-white' />
    <Header />
    <main className='flex-auto'>
      { children() }
    </main>
    <Footer />
  </div>
)

export default Layout
