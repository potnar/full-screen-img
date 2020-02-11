import React from "react";
import "./App.scss";
import FullscreenImg from "./components/FullscreenImg";

class App extends React.Component {
  state = {
    active: false
  };

  clickHandler = () => {
    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler}>Click me</button>
        <FullscreenImg active={this.state.active} onClose={this.clickHandler} />
      </div>
    );
  }
}

export default App;
