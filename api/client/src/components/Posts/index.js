import React from "react";
import Pagination from "../Pagination";
import PostList from "../PostList";
import StyledPost, { PostContainer } from "./style";

export default function Posts({
  posts,
  totalPage,
  currentPage,
  requestPostsByPage,
}) {
  return (
    <StyledPost>
      <PostContainer>
        <PostList posts={posts} />
      </PostContainer>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        requestPostsByPage={requestPostsByPage}
      />
    </StyledPost>
  );
}
