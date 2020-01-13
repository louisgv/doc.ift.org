const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  plugins: [  
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        siteName: "doc.ift",
        subtitle: "IFT Documentations",
        description: "A guide to IFT's standards and APIs",
        githubRepo: "louisgv/doc.ift.org",
        sidebarCategories: {
          null: ["index", "getting-started", "whats-new"],
          Features: [
            "features/mocking",
            "features/errors",
            "features/data-sources",
          ],
        },
      },
    },
  ],
}
