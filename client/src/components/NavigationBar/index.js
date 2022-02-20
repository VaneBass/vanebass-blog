import React from "react";
import StyledNavList, { StyledNavItem, StyledNavItemLink } from "./style";
import "../SearchBar/style.css";

function NavigationBar({ titleList }) {
  // 1.获取当前 dom 的index
  // 2.其他所有元素 isActive 设置为false
  // 3.将当前的元素设置为 isActive
  // 4.应用样式

  function handleClick(e) {
    let titleList = document.querySelectorAll("a");

    for (let item of titleList) {
      item.classList.remove("focus");

      if (e.target.innerText === item.innerText) {
        item.classList.add("focus");
      }
    }
  }

  return (
    <StyledNavList>
      {titleList.length > 0 ? (
        titleList.map((item, index) => {
          return (
            <StyledNavItem key={`${item}-${index}`}>
              <StyledNavItemLink href={`#${item}`} onClick={handleClick}>
                {item}
              </StyledNavItemLink>
            </StyledNavItem>
          );
        })
      ) : (
        <div>no result yet</div>
      )}
    </StyledNavList>
  );
}

export default NavigationBar;
