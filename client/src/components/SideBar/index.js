import React from "react";
import "./style.css";
import me from "../../assets/images/jarritos-mexican-soda-YndbQ-ixU_o-unsplash.jpg";
import {
  faAddressBook,
  faAngleUp,
  faCoffee,
  faCommentSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar({ categories, setCurrentCat }) {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About me</span>
        {/* <img className="sidebar-image" src={me} alt="me" /> */}
        <p>djqoqhiomdkapq</p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-listItem" onClick={() => setCurrentCat("")}>
            所有分类
          </li>
          {categories.map((cat, index) => (
            <li
              className="sidebar-listItem"
              key={`${cat._id}`}
              onClick={() => setCurrentCat(cat.catname)}
            >
              {cat.catname}
            </li>
          ))}
          <li className="sidebar-listItem">Life</li>
          <li className="sidebar-listItem">Music</li>
          <li className="sidebar-listItem">Style</li>
          <li className="sidebar-listItem">Sport</li>
          <li className="sidebar-listItem">Tech</li>
          <li className="sidebar-listItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow us</span>
        <div className="sidebar-social">
          <FontAwesomeIcon className="sidebar-icon" icon={faCommentSlash} />
          <FontAwesomeIcon className="sidebar-icon" icon={faCoffee} />
          <FontAwesomeIcon className="sidebar-icon" icon={faAddressBook} />
          <FontAwesomeIcon className="sidebar-icon" icon={faAngleUp} />
        </div>
      </div>
    </div>
  );
}
