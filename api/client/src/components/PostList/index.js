import React from "react";
import PostItem from "../PostItem";
import StyledPostList from "./style";
// import PropTypes from 'prop-types'

function PostList({ posts }) {
  return (
    <StyledPostList>
      {posts.map((post) => (
        <PostItem key={post["_id"]} post={post} />
      ))}
    </StyledPostList>
  );
}

// PostList.propTypes = {

// }

export default PostList;
