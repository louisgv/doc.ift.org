const themeOptions = require("./src/theme-options")

module.exports = {
  pathPrefix: "/doc.ift.org",
  siteMetadata: {
    title: 'IFT Docs'
  },
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        
        root: __dirname,
        githubRepo: "louisgv/doc.ift.org",
        sidebarCategories: {
          null: ["index", "intro/feedback"],
          "Background Information": [
            "part1/1-gdst-traceability-overview",
            "part1/2-traceability-and-standards",
            "part1/3-traceability-data-systems-sharing",
          ],
          "GDST Framework": [
            "part2/4-data-req-wild-caught",
            "part2/5-data-req-aquaculture",
            "part2/6-obj-loc-req",
            "part2/7-interoperability-wild-farm",
            "part2/8-traceability-data-use-cases",
          ],

          "Basic Universal Lists": [
            "part3/appendix-explanation",
            "part3/appendix-1",
            "part3/appendix-2",
          ]
        },
      },
    },
  ],
}
