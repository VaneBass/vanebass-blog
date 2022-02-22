import styled from "styled-components";
import lightImage from "../../assets/images/light_the_green.jpg";

const StyledHeader = styled.div`
  background: url(${lightImage}) center/cover no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1100px) {
    background-position: left 20px right;
  }

  @media screen and (max-width: 750px) {
    background-position: 80%;
  }
`;

const HeaderTitle = styled.h1`
  color: white;
  line-height: 150%;
  letter-spacing: 0.2rem;

  position: relative;
  display: flex;
  /* text-transform: uppercase; */
  white-space: pre;

  opacity: 0.3;
  transform: scale(0);
  animation: 1.4s fadeIn forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const LinkButton = styled.a`
  position: absolute;
  bottom: 200px;
  font-size: 24px;
  color: white;

  border: 2px solid white;
  border-radius: 5px;
  padding: 5px 18px;
`;

export default StyledHeader;
export { HeaderTitle, LinkButton };
