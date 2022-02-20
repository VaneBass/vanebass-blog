import React, { useEffect, useRef, useState } from "react";
import StyledSearch, {
  ResultItem,
  ResultList,
  SearchBox,
  SearchInput,
} from "./style";
import "./style.css";

function SearchBar() {
  const [word, setWord] = useState("");

  const targetEl = useRef(null);

  let resultArr = [1, 2, 3, 4];

  useEffect(() => {
    if (word) {
      targetEl.current.focus();

      let listArr = document.querySelectorAll("li");

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
              console.log(listArr[curIndex].innerHTML);
              break;
            default:
              return;
          }
        };
      }

      selectItem();
    }
  }, [word]);

  function inputWord(value) {
    value ? setWord(value) : setWord("");
  }

  return (
    <StyledSearch>
      <SearchBox>
        <SearchInput
          ref={targetEl}
          onChange={(e) => inputWord(e.target.value)}
        />
        <ResultList isSearching={word ? true : false}>
          {resultArr.map((elem, index) => (
            <ResultItem key={`${index}-${elem}`}>{elem}</ResultItem>
          ))}
        </ResultList>
      </SearchBox>
    </StyledSearch>
  );
}

export default SearchBar;
