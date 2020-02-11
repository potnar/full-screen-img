import React from "react";
import "./FullscreenImg.scss";
import komp from "../../assets/komp.svg";

class FullscreenImg extends React.PureComponent {
  this.state = { active: this.props.active, nextState: this.state.active };

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.showHide !== this.state.active) {
      return { active: nextProps.showHide };
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onClose}>Click me</button>
        <div
          onClick={this.props.onClose}
          className={
            this.nextProps.showHide ? ".img__backdrop" : ".active-img__backdrop"
          }
        >
          <img
            className={this.nextProps.showHide ? ".img" : ".active-img"}
            src={komp}
          />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
