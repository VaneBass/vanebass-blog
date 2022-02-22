import styled from "styled-components";

const StyledSearch = styled.div`
  width: 500px;
  height: 900px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.div`
  border: 1px solid red;
  width: 370px;
  height: 100%;
  padding: 20px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  display: block;

  outline: none;
  border: 1px solid #333;
  border-radius: 7px;

  font-size: 1rem;
  padding: 0 10px;
`;

const ResultList = styled.ul`
  border: 1px solid yellow;
  box-sizing: border-box;

  width: 370px;
  height: 200px;
  padding: 10px 8px;

  position: absolute;
  top: 45px;

  display: ${({ isSearching }) => (isSearching ? "block" : "none")};
`;

const ResultItem = styled.li`
  list-style: none;
  border: 1px solid;
  border-radius: 6px;
  border-color: green;

  /* width: 90%; */
  height: 35px;
  margin-bottom: 4px;
`;

export default StyledSearch;
export { SearchBox, SearchInput, ResultList, ResultItem };
