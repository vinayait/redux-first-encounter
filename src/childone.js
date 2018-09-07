import React, {Component} from "react";
import {connect} from "react-redux";

import Button from "@material-ui/core/Button";

import {changeColor, resetAll, setSelectedButton} from "./actions/actions.js";

const mapStateToProps = store => {
  return {color: store.color, text: store.text, shoebrand: store.shoebrand, buttonColors: store.buttonColors};
};

const mapDispatchToProps = (dispatch) => {
  return {
    turnRed: () => dispatch(changeColor("#BB4543")),
    turnGrey: () => dispatch(changeColor("#a4a4a4")),
    resetAllRed: () => dispatch(resetAll("#BB4543", "NIKE", "I love Nike!!!")),
    resetAllGrey: () => dispatch(resetAll("#a4a4a4", "ADIDAS", "I love Adidas!!!")),
    setSelectedButton1: () => dispatch(setSelectedButton("red", "green", "green", "green")),
    setSelectedButton2: () => dispatch(setSelectedButton("green", "red", "green", "green")),
    setSelectedButton3: () => dispatch(setSelectedButton("green", "green", "red", "green")),
    setSelectedButton4: () => dispatch(setSelectedButton("green", "green", "green", "red"))
  };
};

class ChildOne extends Component {
  render() {
    return (<div>
      <p style={{
          color: this.props.color
        }}>
        {this.props.color}
      </p>
      <p>
        {this.props.text}
      </p>
      <p>
        {this.props.shoebrand}
      </p>
      <Button variant="outlined" color="secondary" onClick={this.props.resetAllRed}>
        red
      </Button>
      <Button variant="outlined" onClick={this.props.resetAllGrey}>
        grey
      </Button>
      <div>
        <Button variant="outlined" color="primary" style={{
            color: this.props.buttonColors.btn1
          }} onClick={this.props.setSelectedButton1}>
          1
        </Button>
        <Button variant="outlined" color="primary" style={{
            color: this.props.buttonColors.btn2
          }} onClick={this.props.setSelectedButton2}>
          2
        </Button>
        <Button variant="outlined" color="primary" style={{
            color: this.props.buttonColors.btn3
          }} onClick={this.props.setSelectedButton3}>
          3
        </Button>
        <Button variant="outlined" color="primary" style={{
            color: this.props.buttonColors.btn4
          }} onClick={this.props.setSelectedButton4}>
          4
        </Button>
      </div>
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildOne);
