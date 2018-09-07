import React, {Component} from "react";
import "./App.css";
//import ChildOne from "./childone.js";
import Slider from "./slider.js";
//import HomeCard from "./homecard.js";

import {connect} from "react-redux";

import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <Typography variant="title" color="secondary">
          Welcome to Redux with Linting
        </Typography>
      </header>
      <Slider/>
    </div>);
  }
}

export default connect()(App);
