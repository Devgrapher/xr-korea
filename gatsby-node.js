const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/post.js');
  const result = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  const posts = result.data.allContentfulPost.edges;
  posts.forEach((post, index) => {
    createPage({
      path: `/post/${post.node.slug}/`,
      component: postTemplate,
      context: {
        slug: post.node.slug
      },
    });
  });
};
