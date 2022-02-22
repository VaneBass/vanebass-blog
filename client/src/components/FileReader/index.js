import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import LoadingAnime from "../LoadingAnime";
import NavigationBar from "../NavigationBar";
import StyledReader, { Article, Navigation, Output } from "./style";

function FileContentReader({ theme, content, isLoading }) {
  let [titleList, setTitleList] = useState([]);

  // 给标题添加id并设置目录列表
  useEffect(() => {
    let titleArr = [];

    if (content) {
      const h1 = document.querySelector("h1");
      const h2 = document.querySelectorAll("h2");

      h1 && (document.title = h1.innerText);

      h2.forEach((elem) => {
        titleArr.push(elem.innerText);

        let link = document.createElement("a");
        link.innerText = "#";
        elem.setAttribute("id", elem.innerText);
        link.setAttribute("href", `#${elem.id}`);
        elem.appendChild(link);
      });

      setTitleList(titleArr);
    }
  }, [content]);

  // 获取文章内容

  return (
    <StyledReader>
      {isLoading && <LoadingAnime theme={theme} />}
      <Output>
        <Article>
          <ReactMarkdown
            children={content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                    className="code"
                  />
                ) : (
                  <code
                    className={className}
                    style={{
                      backgroundColor: "#666",
                      border: ".1rem solid rgba(0,0,0,.1)",
                      borderRadius: "4px",
                      margin: "0 3px",
                      fontSize: "16px",
                      color: "white",
                    }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          />
        </Article>
        <Navigation>
          {titleList.length > 0 && (
            <NavigationBar theme={theme} titleList={titleList} />
          )}
        </Navigation>
      </Output>
    </StyledReader>
  );
}

export default FileContentReader;
