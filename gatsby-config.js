module.exports = {
  siteMetadata: {
    title: `ProjectName`,
    description: `New Project Description`,
    siteUrl: `https://www.projectname.com`,
    author: `Marcial Garcia`,
    social: [
      {
        name: "twitter",
        url: "<link project in the Twitter>"
      },
      {
        name: "youtube",
        url: "<link project in the Youtube>"
      },
      {
        name: "facebook",
        url: "<link project in the Facebook>"
      },
      {
        name: "instagram",
        url: "<link project in the Instagram>"
      },
      {
        name: "whatsapp",
        url: "<link project in the Professional WhatsApp>"
      }
    ]
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `<name folder project>`,
        short_name: `<shortname folder project>`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#A00000`,
        display: `template-ui`,
        icon: `src/images/globals/favicon.ico`, // 512x512px.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional
        color: `tomato`,
        // Disable the loading spinner in the middle view
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`, `**/content.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
