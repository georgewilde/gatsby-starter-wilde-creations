/* eslint @typescript-eslint/camelcase: 0 */
const companyName = 'Acme Co.';
const shortName = 'Acme';
const description = 'A description for your site';
const author = 'Your Name';
const primaryColor = '#663399';

module.exports = {
  siteMetadata: {
    companyName: companyName,
    description: description,
    author: author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: companyName,
        short_name: shortName,
        start_url: `/`,
        background_color: primaryColor,
        theme_color: primaryColor,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
