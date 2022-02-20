import React from "react";
import "./style.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">登录</span>
      <form className="login-form">
        <label>Email</label>
        <input className="login-input" type="email" placeholder="请输入邮箱" />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="请输入密码"
        />
        <button className="login-button">登录</button>
      </form>
    </div>
  );
}
