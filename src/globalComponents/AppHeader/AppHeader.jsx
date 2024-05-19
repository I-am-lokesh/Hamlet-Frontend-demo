import React from "react";
import "./styles.css";
import logo from "./Hamlet-logo.svg";
import AppButton from "../Buttons/AppButton";
const AppHeader = (props) => {
  return (
    <div className="appHeader">
      <div className="logo-class">
        {" "}
        <img src={logo} alt="" />
        Hamlet{" "}
      </div>
      <AppButton
        text={"Create Wallet"}
        img={"wallet"}
        onClick={props.onButtonClick && props.onButtonClick}
      />
    </div>
  );
};

export default AppHeader;
