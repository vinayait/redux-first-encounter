import React, {Component} from "react";
import {connect} from "react-redux";

import {setCurrentSlide} from "./actions/actions.js";

import Button from "@material-ui/core/Button";

const styles = {
  circularSliderButtons: {
    borderRadius: "50%",
    borderStyle: "none",
    color: "grey",
    backgroundColor: "grey",
    height: "20px",
    width: "20px"
  },
  imgStyle: {
    height: "100%",
    width: "100%"
  }
};

const mapStateToProps = store => {
  return {currentSlide: store.currentSlide};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNextSlide1: () => dispatch(setCurrentSlide("/staticcontent/images/1.jpg")),
    setNextSlide2: () => dispatch(setCurrentSlide("/staticcontent/images/2.jpg")),
    setNextSlide3: () => dispatch(setCurrentSlide("/staticcontent/images/3.jpg")),
    setNextSlide4: () => dispatch(setCurrentSlide("/staticcontent/images/4.jpg")),
    setNextSlide5: () => dispatch(setCurrentSlide("/staticcontent/images/5.jpg"))
  };
};

class HomeCard extends Component {
  render() {
    return (<div style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#a5a5a5",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}>
      <Button variant="outlined" color="primary">
        <a href="http://www.google.com" style={{
            textDecoration: "none"
          }}>google me</a>
      </Button>
      <div style={{
          margin: "5px"
        }}>
        <img style={styles.imgStyle} src={this.props.currentSlide} alt="brb"/>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={this.props.setNextSlide1}>1</Button>
        <Button variant="outlined" color="secondary" onClick={this.props.setNextSlide2}>2</Button>
        <Button variant="outlined" color="primary" onClick={this.props.setNextSlide3}>3</Button>
        <Button variant="outlined" color="secondary" onClick={this.props.setNextSlide4}>4</Button>
        <Button variant="outlined" color="secondary" onClick={this.props.setNextSlide5}>5</Button>
      </div>
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCard);
