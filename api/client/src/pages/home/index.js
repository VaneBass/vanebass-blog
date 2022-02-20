import React from "react";
import CurrentCat from "../../components/CurrentCat";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import SideBar from "../../components/SideBar";
import StyledContainer from "./style";

export default function Home({
  posts,
  categories,
  totalPage,
  currentPage,
  requestPostsByPage,
  setCurrentCat,
}) {
  return (
    <>
      <Header />
      <StyledContainer id="posts">
        <CurrentCat content={"React"} />
        <Posts
          posts={posts}
          totalPage={totalPage}
          currentPage={currentPage}
          requestPostsByPage={requestPostsByPage}
        />
        <SideBar categories={categories} setCurrentCat={setCurrentCat} />
      </StyledContainer>
    </>
  );
}
