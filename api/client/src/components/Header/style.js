import styled from "styled-components";
import lightImage from "../../assets/images/light_the_green.jpg";

const StyledHeader = styled.div`
  background: url(${lightImage}) center/cover no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    background-position: left 20px right;
  }

  @media screen and (max-width: 750px) {
    background-position: right 20px;
  }
`;

const HeaderTitle = styled.h1`
  color: white;
  line-height: 150%;
  letter-spacing: 0.2rem;
`;

export default StyledHeader;
export { HeaderTitle };
