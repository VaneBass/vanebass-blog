import styled from "styled-components";

const StyledPost = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / 14;

  @media screen and (max-width: 1100px) {
    grid-column: 1 / -1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PostContainer = styled.div`
  width: 100%;
  height: fit-content;
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;

  justify-self: center;
`;

export default StyledPost;
export { PostContainer };
