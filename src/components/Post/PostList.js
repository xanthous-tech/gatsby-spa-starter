import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import PostCard from './PostCard';

const PostList = ({posts}) => (
  <div>
    { posts.map(p => <PostCard key={p.frontmatter.title} post={p} />) }
  </div>
)

export default PostList
