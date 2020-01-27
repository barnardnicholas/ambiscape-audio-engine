import React, { Component } from "react";
import "./App.css";
import * as engine from "./utils/engine";

class App extends Component {
  state = {
    sounds: [],
    howls: {}
  };

  componentDidMount(currentState) {
    const { sounds, howls } = this.state;
    const newHowls = {};
    sounds.forEach(sound => {
      newHowls[sound.slug] = engine.initSound(sound);
    });
    this.setState({ howls: newHowls });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
