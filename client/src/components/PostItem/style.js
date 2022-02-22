import styled from "styled-components";

const StyledPostItem = styled.div`
  width: 32vw;
  height: 10vh;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 6px;

  display: grid;
  grid-template-areas:
    "title title title"
    "tags . time";

  @media screen and (max-width: 1830px) {
    width: 600px;
    height: 90px;
  }

  @media screen and (max-width: 1720px) {
    width: 560px;
    height: 90px;
  }

  /* @media screen and (max-width: 1612px) {
    width: 510px;
    height: 90px;
  } */
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
