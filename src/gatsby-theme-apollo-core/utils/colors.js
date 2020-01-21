const { colors } = require("gatsby-theme-apollo-core/src/utils/colors")
const {colors : spaceKitColors} = require('@apollo/space-kit/colors');

exports.colors = {
  ...colors,
  primary: spaceKitColors.blue.base,
  primaryLight: spaceKitColors.blue.light,
  secondary: spaceKitColors.yellow.base
}
