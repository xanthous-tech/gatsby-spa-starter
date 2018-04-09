import React from 'react'
import Helmet from 'react-helmet';
import { kebabCase } from 'lodash'
import Link from 'gatsby-link'
import styled from 'styled-components';

import SEOComponent from "../components/SEO";
import Share from "../components/Share";
import Disqus from '../components/Disqus';

const Wrapper = styled.section`
  line-height: 1.5;
  max-width: 960px;
  margin: 0 auto;
  flex-flow: column nowrap;

  .gatsby-resp-image-link {
    margin: 2.5em 0;
  }

  h1 {
    font-size: 2em;
    font-weight: 700;
  }

  h2,
  h3 {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.15;
    margin: 1em 0 0.7em;
    letter-spacing: -0.01em;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 1.05em;
  }

  blockquote {
    font-style: italic;
    margin: 2.5em 0;
    padding: 1em 1.1em 1em 1.3em;
    position: relative;
    p {
      margin: 0;
    }
    &::after,
    &::before {
      background: gray;
      content: "";
      height: 5px;
      left: 50%;
      margin-left: -47%;
      position: absolute;
      top: -5px;
      width: 94%;
    }
    &::after {
      top: auto;
      bottom: -5px;
    }
  }
`;

export const ArticleTemplate = ({
  content,
  cover,
  title,
  meta_title,
  meta_desc,
  slug,
}) => {
    return (
      <Wrapper>
        <SEOComponent
          title={title}
          meta_title={meta_desc}
          meta_desc={meta_desc}
          cover={cover}
          slug={slug}
        />

        <h1>{title}</h1>
        <img src={cover} alt={title}/>
        <div dangerouslySetInnerHTML={{__html: content}}></div>

        <hr/>
        <Share title={title} slug={slug} excerpt={meta_desc} />

        <hr/>
        <Disqus title={title} slug={slug} />
      </Wrapper>
    )
};

const ArticlePage = ({data}) => {
    const {markdownRemark: post} = data;
    return (
        <ArticleTemplate
            content={post.html}
            cover={post.frontmatter.cover}
            meta_title={post.frontmatter.meta_title}
            meta_desc={post.frontmatter.meta_description}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            slug={post.fields.slug}
        />
    )
};

export default ArticlePage;

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`;
