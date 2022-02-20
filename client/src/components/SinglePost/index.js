import React, { useEffect, useState } from "react";
import "./style.css";
import FileReader from "../FileReader";
import axios from "axios";

export default function SinglePost({ theme, postId }) {
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSinglePost = async () => {
      setIsLoading(true);
      const res = await axios.get(`/posts/singlePost/${postId}`);
      setPostContent(res.data.content);
      setIsLoading(false);
    };
    getSinglePost();
  }, [postId]);

  return (
    <FileReader theme={theme} content={postContent} isLoading={isLoading} />
  );
}
