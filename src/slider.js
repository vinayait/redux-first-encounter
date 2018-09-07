import React, {Component} from "react";
import {connect} from "react-redux";

import {setCurrentSlide} from "./actions/actions.js";

//import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
//import Typography from '@material-ui/core/Typography';

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
  },
  homecardblack: {
    height: "500px",
    width: "100%",
    backgroundColor: "#000000",
    color: "#ffffff",
    margin: "5px 0px",
    //display: "grid",
    //gridTemplateRows: "1fr",
    //gridTemplateColumns: "1fr",
    //alignItems: "center",
    //backgroundImage: "url('/staticcontent/images/2.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  homecardwhite: {
    height: "500px",
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#000000",
    margin: "5px 0px",
    //display: "grid",
    //gridTemplateRows: "1fr",
    //gridTemplateColumns: "1fr",
    //alignItems: "center",
    //backgroundImage: "url('/staticcontent/images/1.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

const mapStateToProps = store => {
  return {currentSlide: store.currentSlide};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNextSlide1: () => dispatch(setCurrentSlide("/staticcontent/images/ipad_large.jpg")),
    setNextSlide2: () => dispatch(setCurrentSlide("/staticcontent/images/ipad_largetall.jpg")),
    setNextSlide3: () => dispatch(setCurrentSlide("/staticcontent/images/ipad_medium.jpg")),
    setNextSlide4: () => dispatch(setCurrentSlide("/staticcontent/images/ipad_small.jpg"))
  };
};

class Slider extends Component {
  render() {
    return (<div style={{
        height: "100%",
        width: "100%"
      }}>
      {/*<Button variant="outlined" color="primary">
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
      </div>*/
      }
      <Paper style={styles.homecardwhite}>
        <div>11111</div>
        <div>2222</div>
      </Paper>
      <Paper style={styles.homecardblack}></Paper>
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
