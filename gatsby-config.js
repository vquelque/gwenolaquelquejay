module.exports = {
  siteMetadata: {
    title: `Gwenola Quelquejay - Acupressure & Hypnose`,
    description: `Prendre rendez-vous avec Gwenola Quelquejay, praticienne Psycho-Bio-Acupressure et hypnothérapeute à Paris ou Fontainebleau.`,
    author: `Gwenola Quelquejay`,
    siteUrl: `https://gwenolaquelquejay.fr`, //no trailing slash
    keywords: `acupressure, hypnose, paris, fontainebleau, médecine douce, psycho-bio-acupressure, pba, delatte, émotionnel`
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
        icon: `./src/images/favicon_package/favicon-32x32.png`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    },]
}
