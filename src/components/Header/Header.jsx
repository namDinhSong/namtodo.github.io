import React from "react";
import Button from "../Button/Button";
import "./style.scss";
export default function Header() {
  return (
    <div className="header-container">
        <Button name={"New Task"} />
      <div className="header-right">
        <input placeholder="Search for..." />
        <Button name={"Search"} />
      </div>
    </div>
  );
};