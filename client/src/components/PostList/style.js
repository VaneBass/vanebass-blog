import styled from "styled-components";

const StyledPostList = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1610px) {
    justify-content: center;
  }

  gap: 10px;
`;

export default StyledPostList;
