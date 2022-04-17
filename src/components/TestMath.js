import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../redux/actions";
import PropTypes from 'prop-types';

class TestMath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTestStarted: false,
      isTestFinished: false,
      min: 60,
      sec: 0
    }

    this.startTest = this.startTest.bind(this);
    this.finishTest = this.finishTest.bind(this);
  }

  componentDidMount() {
    
  }

  startTest() {
    this.props.onChangeTestStarted(); 
    this.setState({
      isTestStarted: true
    });
    let min = 59;
    let sec = 60;

    setInterval(() => {
      sec--;
      if(sec < 0) {
        sec = 59;
        min--;

        if(min == 0) {
          return;
        }
      }

      this.setState({
        min,
        sec
      })
    }, 1000);
  }

  finishTest() {
  }

  render() {
    return (
      <article className="math-test">
        <hr />
        <h2>{this.props.testObj.rules}</h2>
        {
          !this.state.isTestStarted ? 
          <button id="start-btn" onClick={this.startTest}>START</button> :
          <button id="finish-btn" onClick={this.finishTest}>FINISH</button>
        }
        <span id="min">{this.state.min}</span>:<span id="sec">{this.state.sec < 10 ? "0" + this.state.sec : this.state.sec}</span>
    </article>
    );
  }
}

const mapStateToProps = state => { 
    return {
      app: state.commonReducer.app,
      isTestStarted: state.testReducer.isTestStarted,
      isTestFinished: state.testReducer.isTestFinished
    };
  };
  
  const mapDispachToProps = dispatch => {
    return {
      onChangeApp: (app) => dispatch(actionCreator.changeApp(app)),
      onChangeTestStarted: () => dispatch(actionCreator.startTest()),
      onChangeTestFinished: () => dispatch(actionCreator.finishTest())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(TestMath);

  TestMath.propTypes = {
    testObj: PropTypes.object
  }