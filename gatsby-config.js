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
          null: ["index", "intro/executive-summary", "intro/feedback"],
          "Pretext": [
            "pretext/why-epcis",
            "pretext/why-extension",
            "pretext/why-iuu",
          ],
          "Certifications": [
            "certification/msc-asc",
            "certification/other-cert"
          ],
          "Regulatory": [
            "regulatory/simp-compliance",
            "regulatory/eu-catch-cert",
            "regulatory/non-western-regulations",
          ],
          "Events": [
            "events/at-sea",
            "events/aquaculture",
          ],
          "Open API": [
            "open-api/example",
            "open-api/swagger-api"
          ],
          "Resources": [
            "resources/index"
          ],
        },
      },
    },
  ],
}
