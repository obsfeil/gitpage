// eslint-disable-next-line no-undef
export const siteMetadata = {
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
}
export const plugins = [
  {
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: "http://localhost:1337",
      collectionTypes: ["article"],
      //singleTypes: ['Home Page', 'Contact'],
      // Extract images from markdown fields.
      markdownImages: {
        typesToParse: {
          Article: ["body"],
          ComponentBlockBody: ["text"],
        },
      },
      // Only include specific locale.
      locale: "en",

      // Include drafts in build.
      preview: true,

      // Use application token.
      token: "Gatsby",
      // Add additional headers.
      headers: {},
    },
  },

  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      // path: `${__dirname}/src/images`,
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
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]
