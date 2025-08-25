module.exports = {
  siteMetadata: {
    title: `Gwenola Quelquejay - Acupressure & Hypnose`,
    description: `Prendre rendez-vous avec Gwenola Quelquejay, praticienne Psycho-Bio-Acupressure et hypnothérapeute à Paris ou Fontainebleau.`,
    author: `Gwenola Quelquejay`,
    siteUrl: `https://gwenolaquelquejay.fr`, //no trailing slash
    keywords: `acupressure, hypnose, paris, fontainebleau, médecine douce, psycho-bio-acupressure, pba, delatte, émotionnel`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EK6YEPZDP5", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
        name: `Gwenola Quelquejay - Acupressure & Hypnose`,
        short_name: `Gwenola`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ec4899`,
        icon: `./src/images/favicon_package/favicon-32x32.png`,
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
