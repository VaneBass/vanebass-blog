import styled from "styled-components";

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 5px;

  position: sticky;
  top: 50px;

  ::before {
    content: "文章目录";
    font-size: 22px;
    font-weight: 500;

    margin-bottom: 0.5rem;
  }
`;

const StyledNavItem = styled.li`
  border-radius: 15px;
  /* color: #333; */
  height: 30px;
  line-height: 30px;

  padding: 5px 10px;
`;

const StyledNavItemLink = styled.a`
  text-decoration: none;

  :visited {
    color: #333;
  }

  :hover {
    cursor: pointer;
    color: green;
  }
`;

export default StyledNavList;
export { StyledNavItem, StyledNavItemLink };
