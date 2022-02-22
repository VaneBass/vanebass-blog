import React from "react";
import Pagination from "../Pagination";
import PostList from "../PostList";
import StyledPost, { PostContainer } from "./style";

export default function Posts({
  theme,
  posts,
  totalPage,
  currentPage,
  requestPostsByPage,
  setCurrentCat,
}) {
  return (
    <StyledPost>
      <PostContainer>
        <PostList posts={posts} setCurrentCat={setCurrentCat} />
      </PostContainer>
      <Pagination
        theme={theme}
        totalPage={totalPage}
        currentPage={currentPage}
        requestPostsByPage={requestPostsByPage}
      />
    </StyledPost>
  );
}
