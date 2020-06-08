/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
//to install font awesome
//npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//IMPORTANT build with - gatsby build --prefix-paths -Also, I just cloned the public folder and it seems to have worked fine. 
//need to figure out how the fuck it's sorting.  Commented out all the date lines.
module.exports = {
  // pathPrefix: '/posts',
  pathPrefix: "7seals/",
  /* Your site config here */
  siteMetadata: {
    title: "7Seals CrossFit Coaches blog",
    author: "Jereme Daniels",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Staatliches`,
          },
          {
            family: `McLaren`,
          },
          {
            family: "ZCOOL XiaoWei",
          },
        ],
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass", //obviously for sass
    {
      //this is the plugin that retrieves local files. Found in graphql
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
