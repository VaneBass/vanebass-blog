import React from "react";
import "./style.css";
import SinglePost from "../../components/SinglePost";
import { useParams } from "react-router-dom";

export default function Single({ theme }) {
  let params = useParams();

  return (
    <div className="single">
      <SinglePost theme={theme} postId={params.postId} />
    </div>
  );
}
