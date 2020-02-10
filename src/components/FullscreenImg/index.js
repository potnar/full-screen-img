import React from "react";
import "./FullscreenImg.scss";
import komp from "../../assets/komp.svg";

class FullscreenImg extends React.PureComponent {
  constructor(){
    super(props);
  this.state = { active: false };
  }

static getDerivedStateFromProps(nextProps, nextState) {
 if (nextProps.active !== this.state.active) { return ({ active: nextProps.active }); 
}

  render() {
    return (
      <div>
        <button onClick={this.getDerivedStateFromProps}>Click me</button>
        <div onClick={this.getDerivedStateFromProps ? ".img__backdrop" : ".active-img__backdrop"} className={imgBackdropClasses}>
          <img className={this.getDerivedStateFromProps ? ".img" : ".active-img"} src={komp} />
        </div>
      </div>
    );
  }
}

export default FullscreenImg;
