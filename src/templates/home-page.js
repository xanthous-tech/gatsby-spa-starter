import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
`

const StyledRow = styled(Row)`
  margin-top: 40px;
`

const StyledCol = styled(Col)`
  max-width: 500px;
  text-align: justify;
  display: flex!important;
  flex-direction: column;

  .card-image {
    margin: 15px auto;
  }
`

const HomePage = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Wrapper>
      <h1>{frontmatter.heading}</h1>
      <p>{frontmatter.description}</p>
      <StyledRow
        type="flex"
        justify="space-around"
        gutter={16}
      >
        {
          frontmatter.offerings.blurbs.map((b) =>
            <StyledCol key={Math.random()} xs={{span: 24}} md={{span:12}}>
              <img className="card-image" src={b.image} />
              <p key={Math.random()}>{b.text}</p>
            </StyledCol>
          )
        }
      </StyledRow>
    </Wrapper>
  );
}

export default HomePage;

export const homePageQuery = graphql`
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
