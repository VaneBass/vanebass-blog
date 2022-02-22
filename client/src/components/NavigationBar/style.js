import styled from "styled-components";

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 5px;

  width: 150%;
  height: fit-content;

  position: sticky;
  top: 50px;

  ::before {
    content: "文章目录";
    font-size: 22px;
    font-weight: 500;

    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const StyledNavItem = styled.li`
  border-radius: 15px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "white")};
  height: 30px;
  line-height: 30px;

  padding: 5px 10px;
`;

const StyledNavItemLink = styled.a`
  text-decoration: none;

  :visited {
    color: ${({ theme }) => (theme === "light" ? "#333" : "white")};
  }

  :hover {
    cursor: pointer;
    color: green;
  }
`;

export default StyledNavList;
export { StyledNavItem, StyledNavItemLink };
