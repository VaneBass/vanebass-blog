import styled from "styled-components";

const StyledTopBar = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  font-family: "Josefin Sans", sans-serif;
  z-index: 999;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Logo = styled.div`
  font-size: 18px;
  color: #159957;
  cursor: pointer;
  margin-right: 8vw;
  background-color: ${({ theme }) => theme.body};
`;

const TopMenu = styled.ul`
  width: 14vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1680px) {
    width: 15vw;
  }

  @media screen and (max-width: 1520px) {
    width: 16vw;
  }

  @media screen and (max-width: 1360px) {
    width: 17vw;
  }

  @media screen and (max-width: 1100px) {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: calc(100vh - 80px);
    padding-top: 60px;

    /* rgba(65, 81, 101, 0.9) */

    background-color: ${({ theme }) =>
      theme === "light" ? `rgba(253, 249, 251, 0.9)` : "rgba(36, 43, 46, 0.9)"};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  margin: auto;
  cursor: pointer;
  :hover {
    color: #159957;
  }

  @media screen and (max-width: 1100px) {
    margin: 3vh;
  }
`;

const SearchContainer = styled.div`
  width: 18vw;
  padding: 3px 5px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #686868;
  border-radius: 10px;

  :focus {
    border-color: #159957;
  }

  @media screen and (max-width: 1100px) {
    position: absolute;
    top: 55px;
    right: 10vw;
    z-index: 999;
    width: 30vw;

    justify-content: space-between;

    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const SearchInput = styled.input`
  width: 15vw;
  padding: 4px 5px;
  border: none;
  outline: none;

  background: transparent;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 1100px) {
    width: 25vw;
  }
`;

const ResultList = styled.ul`
  border-radius: 10px;
  box-sizing: border-box;
  width: 18vw;
  height: fit-content;

  padding: 10px 8px;

  position: absolute;
  top: 45px;

  background-color: white;
  display: ${({ isSearching }) => (isSearching ? "block" : "none")};

  @media screen and (max-width: 1100px) {
    width: 30vw;
    font-size: 14px;
    transform: translateX(-6px);

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const ResultItem = styled.li`
  list-style: none;
  background-color: white;
  color: #333;
  border-radius: 5px;
  height: 35px;
  line-height: 35px;
  margin-bottom: 4px;
  padding: 0 5px;

  :hover {
    cursor: pointer;
  }
`;

const Burger = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: block;

    position: absolute;
    right: 2vw;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => (theme === "light" ? "#333" : "white")};
  margin: 4px;
`;

export default StyledTopBar;
export {
  Logo,
  TopMenu,
  MenuItem,
  SearchContainer,
  SearchInput,
  ResultList,
  ResultItem,
  Burger,
  BurgerLine,
};
