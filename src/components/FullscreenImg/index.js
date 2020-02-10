import React from "react";
import "./FullscreenImg.scss";
import komp from "../../assets/komp.svg";

class FullscreenImg extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  static getDrivedStateFromProps(nextProps, nextState) {
    if (nextProps.active !== nextState.active) {
      return { active: nextProps.active };
    }
  }

  render() {
    return (
      <div className="img__backdrop">
        <img className="img" src={komp} />
      </div>
    );
  }
}

export default FullscreenImg;
