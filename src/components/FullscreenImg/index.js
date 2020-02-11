import React from "react";
import "./FullscreenImg.scss";
import komp from "../../assets/komp.svg";

class FullscreenImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: props.active };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.active !== nextState.active) {
      return { active: nextProps.active };
    }
  }
  render() {
    return (
      <div className="img__backdrop--wrapper">
        <button onClick={this.props.onClose}>Click me</button>
        <div
          onClick={this.props.onClose}
          className={
            this.props.active ? "img__backdrop" : "active-img__backdrop"
          }
        >
          <img
            className={this.props.showHide ? "img" : "active-img"}
            src={komp}
          />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
