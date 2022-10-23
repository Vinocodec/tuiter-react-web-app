import React from 'react';
import PostItem from './PostItem.js';
import posts from './posts.json';

const PostList = () => {
  return (
    <>
      {posts.map(post => <PostItem post={post}/>)}
    </>
  );
};

export default PostList;