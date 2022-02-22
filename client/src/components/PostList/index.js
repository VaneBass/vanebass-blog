import React from "react";
import PostItem from "../PostItem";
import StyledPostList from "./style";
import PropTypes from "prop-types";

function PostList({ posts, setCurrentCat }) {
  return (
    <StyledPostList>
      {posts.map((post) => (
        <PostItem key={post["_id"]} post={post} setCurrentCat={setCurrentCat} />
      ))}
    </StyledPostList>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
