import styled from "styled-components";

const StyledPost = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / 14;
`;

const PostContainer = styled.div`
  width: 100%;
  height: fit-content;
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

export default StyledPost;
export { PostContainer };
