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
  handleClick = () => {
    this.setState({ active: true });
  };

  // static getDrivedStateFromProps(nextProps, nextState) {
  //   if (nextProps.active !== nextState.active) {
  //     return { active: nextProps.active };
  //   }
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <div
          className={
            this.state.active ? "active-img__backdrop" : "img__backdrop"
          }
        >
          <img
            className={this.state.active ? "active-img" : "img"}
            src={komp}
          />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
