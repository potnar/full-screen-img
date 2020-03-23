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
        <div className="img__backdrop">
          <img
            className="img"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/5-cube_solved_close.png"
          />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
