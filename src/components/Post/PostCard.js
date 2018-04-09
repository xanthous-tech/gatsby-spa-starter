import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #001529;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 3px;
`

const StyledLink = styled(Link)`
  color: black;
`

const PostCard = ({post}) => (
  <Card>
    <h1><StyledLink to={post.fields.slug}>{post.frontmatter.title}</StyledLink></h1>
    <p>{post.excerpt}</p>
  </Card>
)

export default PostCard
