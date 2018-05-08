import React from 'react'

let styles
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const description = "Ethereal 2018's game theory casino."

const Html = ({ headComponents, body, postBodyComponents }) => (
  <html className='h-100 ma0'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=320, initial-scale=1.0, shrink-to-fit=yes user-scalable=no'
      />

      {/* Fonts + Favicon */}
      <link rel='shortcut icon' type='image/png' href='/favicon.png' />

      {/* Put children first to establish tag precedence */}
      {headComponents}

      <title>NashCash</title>
      <meta property='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='article:author' content='NashCash Casino' />

      {/* Facebook open graph meta */}
      <meta property='og:title' content='NashCash Casino' />
      <meta property='og:description' content={description} />
      <meta property='og:url' content='https://nashcash.casino' />
      <meta property='og:image' content='/fb-img.png' />

      {/* Twitter card meta */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@nashcash_casino' />

      {/* Styles */}
      {process.env.NODE_ENV === 'production' ? (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      ) : null}
    </head>
    <body className='near-white bg-near-black h-100 ma0'>
      <div
        className='h-100'
        id='___gatsby'
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

export default Html
