import React from "react";
import "./style.css";
import SideBar from "../../components/SideBar";
import profilePicture from "../../assets/images/jarritos-mexican-soda-YndbQ-ixU_o-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-container">
        <div className="settings-title">
          <span className="settings-updateTitle">Update your account</span>
          <span className="settings-deleteTitle">Delete your account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-pp">
            <img src={profilePicture} alt="da" />
            <label htmlFor="fileInput">
              <FontAwesomeIcon
                className="settings-ppIcon"
                icon={faUserCircle}
              />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Kyo" />
          <label>Email</label>
          <input type="email" placeholder="kyo@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">更新信息</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
