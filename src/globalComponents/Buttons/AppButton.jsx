import React from "react";
import "./styles.css";
import wallet from "./Vector.svg";
import arrow from "./arrow.svg";
const AppButton = (props) => {
  const styles = {
    backgroundColor:
      props.styles && props.styles.bgColor ? props.styles.bgColor : "#222222",
    color: props.styles && props.styles.color ? props.styles.color : "#E8EAED",
    border: props.styles && props.styles.border ? props.styles.border : "none",
  };
  return (
    <button className="AppButton" style={styles} onClick={props.onClick && props.onClick}>
      {props.img === "wallet" && (
        <img className="wallet icon" src={wallet} alt="" />
      )}
      {props.text}
      {props.img === "launch" && (
        <img className="launch icon" src={arrow} alt="" />
      )}
    </button>
  );
};

export default AppButton;
