import React from "react";
import "./Backdrop.scss";
import komp from "../../assets/komp.svg";

const Backdrop = props => (
  <div className="backdrop" onClick={props.click}>
    <img className="img-rotated" src={komp} />
  </div>
);

export default Backdrop;
