import React, { useEffect, useRef, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledTopBar, {
  Burger,
  BurgerLine,
  Logo,
  MenuItem,
  ResultItem,
  ResultList,
  SearchContainer,
  SearchInput,
  TopMenu,
} from "./style";
import Toggle from "../Toggle";
import { Link } from "react-router-dom";
import "../SearchBar/style.css";

export default function TopBar({
  theme,
  toggleTheme,
  setSearchWord,
  searchResult,
}) {
  const [word, setWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const targetEl = useRef(null);

  useEffect(() => {
    if (word) {
      setSearchWord(word);

      targetEl.current.focus();

      if (searchResult && searchResult.length > 0) {
        let listArr = document.querySelectorAll(".search-result-item");

        listArr.forEach((elem) => {
          elem.classList.remove("focus");

          elem.addEventListener("mouseover", () => {
            elem.classList.add("focus");
          });

          elem.addEventListener("mouseleave", () => {
            elem.classList.remove("focus");
          });

          elem.addEventListener("click", () => {
            window.location.href = elem.firstChild["href"];
          });
        });

        function selectItem() {
          let curIndex = 0;

          listArr[curIndex].classList.add("focus");

          // 选中元素并添加样式
          function focusItem(drection) {
            // 移除已被选中的元素样式
            listArr.forEach((elem) => elem.classList.remove("focus"));

            if (drection === "down") {
              curIndex += 1;
              if (curIndex > listArr.length - 1) {
                curIndex = 0;
              }
            } else if (drection === "up") {
              curIndex -= 1;
              if (curIndex < 0) {
                curIndex = listArr.length - 1;
              }
            } else {
              return;
            }

            // 给当前元素添加样式
            listArr[curIndex].classList.add("focus");
          }

          document.onkeydown = (e) => {
            switch (e.key) {
              case "ArrowDown":
                focusItem("down");
                break;
              case "ArrowUp":
                e.preventDefault();
                focusItem("up");
                break;
              case "Enter":
                window.location.href = listArr[curIndex].firstChild["href"];
                break;
              default:
                return;
            }
          };
        }

        selectItem();
      }
    }
  }, [word, searchResult, setSearchWord, isOpen]);

  function inputWord(value) {
    value ? setWord(value) : setWord("");
  }

  function openItem() {
    setIsOpen(!isOpen);
  }

  return (
    <StyledTopBar>
      <Logo>
        <b>
          <Link to="/">丢人侠</Link>
        </b>
      </Logo>
      <SearchContainer isOpen={isOpen}>
        <FontAwesomeIcon
          style={{
            marginRight: "5px",
            color: "gray",
          }}
          icon={faSearch}
        />
        <SearchInput
          ref={targetEl}
          onChange={(e) => inputWord(e.target.value)}
        />
        <ResultList isSearching={word ? true : false}>
          {searchResult &&
            searchResult.length > 0 &&
            searchResult.map((elem, index) => (
              <ResultItem
                className="search-result-item"
                key={`${index}-${elem}`}
              >
                <Link to={`/posts/${elem._id}`}>{elem.title}</Link>
              </ResultItem>
            ))}
        </ResultList>
      </SearchContainer>
      <TopMenu isOpen={isOpen}>
        <MenuItem>
          <Link to="/">首页</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">联系我</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">关于</Link>
        </MenuItem>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </TopMenu>

      <Burger onClick={() => openItem()}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </Burger>
    </StyledTopBar>
  );
}
