import React from "react";
import { Link } from "react-router-dom";
import CategoryTag from "../CategoryTag";
// import postImage from "../../assets/images/greenRockAndBlueSea.jpg";
// import { Link } from "react-router-dom";
import StyledPostItem, { PostTags, PostTime } from "./style";

export default function PostItem({ post }) {
  return (
    <StyledPostItem>
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
      <PostTags>
        {post.category.map((cate, index) => (
          <CategoryTag key={`${index}-${cate}`} category={cate} />
        ))}
      </PostTags>
      <PostTime>{new Date(post.updatedAt).toLocaleDateString()}</PostTime>
    </StyledPostItem>
  );
}
