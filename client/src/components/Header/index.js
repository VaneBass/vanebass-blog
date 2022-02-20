import React from "react";
import StyledHeader, { HeaderTitle } from "./style";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderTitle>
        Hello，我是丢人侠，
        <br />
        我的目标是克服懒惰
        <a href="#posts">博客</a>
      </HeaderTitle>
    </StyledHeader>
  );
}
