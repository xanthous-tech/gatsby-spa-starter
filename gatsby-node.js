const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.modifyBabelrc = ({ babelrc }, { style }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat([
    [
      'import',
      {
        libraryName: 'antd',
        style: style || 'css',
      },
    ],
  ]),
});

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      /* eslint-disable-next-line */
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    return posts.forEach((edge) => {
      const { node: { id } } = edge;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),

        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // Make the front page match everything client side.
    // Normally your paths should be a bit more judicious.
    try {
      if (page.path === '/dashboard/') {
        /* eslint-disable-next-line */
        page.matchPath = '/dashboard/:path'
        createPage(page);
      }
      resolve();
    } catch (err) {
      reject();
    }
  });
};
