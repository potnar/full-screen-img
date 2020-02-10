import React from "react";
import "./FullscreenImg.scss";
import komp from "../../assets/komp.svg";

class FullscreenImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: this.props.state };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.showHide !== this.state.active) {
      return { active: nextProps.showHide };
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.getDerivedStateFromProps}>Click me</button>
        <div
          onClick={this.getDerivedStateFromProps}
          className={
            this.getDerivedStateFromProps
              ? ".img__backdrop"
              : ".active-img__backdrop"
          }
        >
          <img
            className={this.getDerivedStateFromProps ? ".img" : ".active-img"}
            src={komp}
          />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
