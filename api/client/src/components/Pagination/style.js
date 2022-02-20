import styled from "styled-components";

const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;

  border: 1px solid blue;
`;

const PageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Page = styled.li`
  margin: 0 1px;

  width: 50px;
  height: 50px;

  border: 1px solid black;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

const PageLink = styled.a`
  color: ${({ isCurrentPage }) => (isCurrentPage ? "red" : "green")} !important;
  font-size: 18px;
`;

export default StyledPagination;
export { PageList, Page, PageLink };
