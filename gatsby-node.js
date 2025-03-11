/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/404/',
    component: require.resolve('./src/pages/404.tsx'),
    context: {}, // Ensure this is not null or undefined
  });
};
