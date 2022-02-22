import React from "react";
import CurrentCat from "../../components/CurrentCat";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import SideBar from "../../components/SideBar";
import StyledContainer from "./style";

export default function Home({
  theme,
  posts,
  categories,
  totalPage,
  currentPage,
  requestPostsByPage,
  currentCat,
  setCurrentCat,
}) {
  document.title = "丢人侠的博客";

  return (
    <>
      <Header theme={theme} />
      <StyledContainer id="posts">
        <CurrentCat currentCat={currentCat} />
        <Posts
          theme={theme}
          posts={posts}
          totalPage={totalPage}
          currentPage={currentPage}
          requestPostsByPage={requestPostsByPage}
          setCurrentCat={setCurrentCat}
        />
        <SideBar
          theme={theme}
          categories={categories}
          currentCat={currentCat}
          setCurrentCat={setCurrentCat}
        />
      </StyledContainer>
    </>
  );
}
