import React from 'react';

const HomePage = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div>
      <h1>{frontmatter.heading}</h1>
      <p>{frontmatter.description}</p>
      {
        frontmatter.offerings.blurbs.map((b) =>
          <p key={Math.random()}>{b.text}</p>)
      }
    </div>
  )
}

export default HomePage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
