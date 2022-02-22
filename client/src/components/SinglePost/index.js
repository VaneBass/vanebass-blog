import React, { useEffect, useState } from "react";
import "./style.css";
import FileReader from "../FileReader";
import axios from "axios";
import { baseUrl } from "../../data/data";

export default function SinglePost({ theme, postId }) {
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSinglePost = async () => {
      setIsLoading(true);
      const res = await axios.get(`${baseUrl}/posts/singlePost/${postId}`);
      setPostContent(res.data.content);
      setIsLoading(false);
    };
    getSinglePost();
  }, [postId]);

  return (
    <FileReader theme={theme} content={postContent} isLoading={isLoading} />
  );
}
