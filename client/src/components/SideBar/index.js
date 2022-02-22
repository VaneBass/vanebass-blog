import React from "react";
import "./style.css";
// import {
//   faAddressBook,
//   faAngleUp,
//   faCoffee,
//   faCommentSlash,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import category from "../../data/data";

export default function SideBar({
  theme,
  categories,
  currentCat,
  setCurrentCat,
}) {
  let isLightMode = theme === "light";

  return (
    <div
      className="sidebar"
      style={{ backgroundColor: isLightMode ? "#fdfbfb" : "#333" }}
    >
      <div className="sidebar-item">
        <span
          className="sidebar-title"
          style={{ color: isLightMode ? "#333" : "#fdfbfb" }}
        >
          关于本站
        </span>
        <p className="intro">
          本站主要发布一些我遇到的问题的解决方法或者学习笔记，目的在于帮助自己快速回忆所学的知识，但如果能帮助到你，我将感到荣幸。
          不过本人能力有限，加上本站刚完成不久，目前的博客较少。也有许多可以改进的地方，但现阶段就先这样吧。
        </p>
      </div>
      <div className="sidebar-item">
        <span
          className="sidebar-title"
          style={{ color: isLightMode ? "#333" : "#fdfbfb" }}
        >
          博客类型
        </span>
        <ul className="sidebar-list">
          <li className="sidebar-listItem" onClick={() => setCurrentCat("")}>
            全部
          </li>
          {categories.map((cat, index) => (
            <li
              className="sidebar-listItem"
              style={{ color: currentCat === cat.catname ? "green" : "" }}
              key={`${cat._id}`}
              onClick={() => setCurrentCat(cat.catname)}
            >
              {category[cat.catname]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
