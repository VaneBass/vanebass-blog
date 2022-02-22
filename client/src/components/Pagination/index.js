import React from "react";
import StyledPagination, { Page, PageLink, PageList } from "./style";

function Pagination({ theme, totalPage, currentPage, requestPostsByPage }) {
  let fontColor = theme === "light" ? "#333" : "white";

  // 存放页码的数组
  let pageNumberArr = [];
  // 底部导航数组
  let navArr = [];

  for (let i = 0; i < totalPage; i++) {
    navArr.push(i + 1);
  }

  // 判断总页数  如果总页数小于10
  if (navArr.length <= 10) {
    pageNumberArr = navArr;
  } else {
    // 总页数大于10   当前页小于5
    if (currentPage < 5) {
      // 页码数组显示为：前5页 ... 最后一页
      pageNumberArr = [...navArr.slice(0, 5), "...", totalPage];
    } else {
      // 当前页小于或等于最大页码数-4
      if (currentPage <= totalPage - 4) {
        // 页码数组显示为：第1页 ... 当前页码以及其左右两边页码 ... 最后一页
        pageNumberArr = [
          1,
          "...",
          ...navArr.slice(currentPage - 2, currentPage + 1),
          "...",
          totalPage,
        ];
      } else {
        // 页码数组显示为：第1页 ... 最后5页
        pageNumberArr = [1, "...", ...navArr.slice(totalPage - 5, totalPage)];
      }
    }
  }

  return (
    <StyledPagination>
      <PageList>
        {pageNumberArr.map((v, index) => (
          <Page key={`${index}-${v}`} onClick={() => requestPostsByPage(v)}>
            <PageLink fontColor={fontColor} isCurrentPage={currentPage === v}>
              {v}
            </PageLink>
          </Page>
        ))}
      </PageList>
    </StyledPagination>
  );
}

export default Pagination;
