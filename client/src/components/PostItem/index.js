import React from "react";
import { Link } from "react-router-dom";
import CategoryTag from "../CategoryTag";
import StyledPostItem, { PostTags, PostTime } from "./style";

export default function PostItem({ post, setCurrentCat }) {
  return (
    <StyledPostItem>
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
      <PostTags>
        {post.category.map((cate, index) => (
          <CategoryTag
            key={`${index}-${cate}`}
            catname={cate}
            setCurrentCat={setCurrentCat}
          />
        ))}
      </PostTags>
      <PostTime>{new Date(post.updatedAt).toLocaleDateString()}</PostTime>
    </StyledPostItem>
  );
}
