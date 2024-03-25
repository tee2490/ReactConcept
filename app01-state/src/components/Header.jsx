import React from "react";
import logo from "../image/logo.png";
import "./Header.css";

export default function Header(props) {
  const {title} = props
  return (
    <nav>
      <img src={logo} className="logo" />
      <a href="/">{title}</a>
    </nav>
  );
}
