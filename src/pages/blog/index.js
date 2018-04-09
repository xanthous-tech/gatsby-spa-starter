import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../../components/Post/PostList';
import styled from 'styled-components';

const Wrapper =  styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export default class BlogPage extends React.Component {
  render() {
    const {data} = this.props;
    let {edges: posts} = data.allMarkdownRemark;
    posts = posts.map(p => p.node)
      .filter(p => (p.frontmatter.templateKey === "article-page"))

    return (
      <Wrapper>
        <PostList posts={posts} />
      </Wrapper>
    )
  }
}

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
