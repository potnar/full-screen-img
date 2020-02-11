import React from "react";
import "./App.scss";
import FullscreenImg from "./components/FullscreenImg";

class App extends React.Component {
  state = {
    active: false
  };

  render() {
    return (
      <div className="App">
        <FullscreenImg
          active={this.state.active}
          onClose={() => this.setState({ active: true })}
        />
      </div>
    );
  }
}

export default App;
