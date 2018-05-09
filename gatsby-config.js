require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    // analytics & SEO
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-52765720-3' }
    },

    // style pre-processing & optimization
    'gatsby-plugin-purify-css',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          require('autoprefixer')(),
          require('postcss-import')(),
          require('postcss-simple-vars')()
        ]
      }
    }
  ]
}
