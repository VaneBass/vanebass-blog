import React from "react";
import StyledHeader, { HeaderTitle, LinkButton } from "./style";

export default function Header({ theme }) {
  return (
    <StyledHeader>
      <HeaderTitle className="reveal">
        Hello，我是丢人侠，
        <br />
        这是我的博客网站
      </HeaderTitle>
      <LinkButton href="#posts" title="浏览博客">
        ↓
      </LinkButton>
    </StyledHeader>
  );
}
