import React from "react";
import "./FullscreenImg.scss";
import komp from "../../assets/komp.svg";

class FullscreenImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: this.props.active };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.active !== nextState.active) {
      return { active: nextProps.active };
    }
  }
  render() {
    console.log(this.props.active);
    return (
      <div className="img__backdrop--wrapper">
        <button onClick={this.props.onClose}>Click me</button>
        <div
          onClick={this.props.onClose}
          className={
            this.props.active ? "active-img__backdrop" : "img__backdrop"
          }
        >
          <img
            className={this.props.active ? "active-img" : "img"}
            src={komp}
          />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
