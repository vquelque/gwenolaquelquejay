module.exports = {
  siteMetadata: {
    title: `Gwenola Quelquejay - Praticienne PBA et Hypnothérapeute`,
    description: `Prendre rendez-vous avec Gwenola Quelquejay, praticienne PBA et hypnothérapeute à Paris ou Fontainebleau.`,
    author: `Gwenola Quelquejay`,
    siteUrl: `https://gwenolaquelquejay.fr/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mailgo`, 
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon_package/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
