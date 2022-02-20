import styled from "styled-components";

const StyledHeadLink = styled.a`
  opacity: 0;
  padding-left: 0.5rem;
  transition: opacity 0.5s;

  text-decoration: none;

  :hover {
    opacity: 1;
    color: green;
    cursor: pointer;
  }
`;

export default StyledHeadLink;
