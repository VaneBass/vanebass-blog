import styled from "styled-components";

const StyledPostItem = styled.div`
  width: 640px;
  height: 100px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 6px;

  display: grid;
  grid-template-areas:
    "title title title"
    "tags . time";
`;

const PostTitle = styled.a`
  font-size: 1rem;
  grid-area: title;
  :hover {
    cursor: pointer;
  }
`;

const PostTags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  grid-area: tags;
`;

const PostTime = styled.span`
  color: #8d94ab;
  margin: auto 2px auto auto;
  grid-area: time;
`;

export default StyledPostItem;
export { PostTitle, PostTags, PostTime };
