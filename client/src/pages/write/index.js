import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import writeImg from "../../assets/images/greenRockAndBlueSea.jpg";

export default function Write() {
  return (
    <div className="write">
      <img className="write-image" src={writeImg} alt="img" />
      <form className="write-form">
        <div className="write-formGroup">
          <label htmlFor="file-input">
            <FontAwesomeIcon className="write-icon" icon={faPlus} />
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-formGroup">
          <textarea
            placeholder="Tell your sotry"
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">发布博客</button>
      </form>
    </div>
  );
}
