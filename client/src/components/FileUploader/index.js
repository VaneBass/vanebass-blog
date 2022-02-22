import axios from "axios";
import React, { useRef } from "react";
import StyledInput from "./style";

function FileUploader() {
  const inputRef = useRef(null);

  async function savePost(title, content, category) {
    await axios
      .post("https://api-xi-gold.vercel.app/api/posts", {
        title,
        content,
        category,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getContent() {
    if (
      inputRef.current.files &&
      inputRef.current.files.length > 0 &&
      inputRef.current.files[0].size > 0
    ) {
      let file = inputRef.current.files[0];
      if (window.FileReader) {
        let reader = new FileReader();
        reader.onloadend = function (evt) {
          if (evt.target.readyState === FileReader.DONE) {
            let title = file.name.split(".")[0];
            let content = evt.target.result;
            let category = ["javascript"];

            savePost(title, content, category);
          }
        };
        reader.readAsText(file, "UTF-8");
      }
    }
  }

  return <StyledInput type="file" ref={inputRef} onChange={getContent} />;
}

export default FileUploader;
