import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreator from "../redux/actions";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

class TestMath extends Component {
  constructor(props) {
    super(props);

    this.num = 60;

    this.state = {
      isTestStarted: false,
      isTestFinished: false,
      min: 60,
      sec: 0,
      currentQuestionNumber: 1
    }

    this.getQuestions = this.getQuestions.bind(this);
    this.startTest = this.startTest.bind(this);
    this.finishTest = this.finishTest.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
  }

  onChangeQuestion(e) {
    this.setState({
      currentQuestionNumber: e.target.id
    });
  }
  
  getQuestions() {
    return <main className="questions-wrapper">
      <nav className="questions-nav">
        {this.props.testObj.questionList.slice(0, 10).map((obj) => {
          return <button key={obj.number} id={obj.number} className="question-btn" onClick={this.onChangeQuestion}>{obj.number}</button>
        })}
        <br />
        {this.props.testObj.questionList.slice(10).map((obj) => {
          return <button key={obj.number} id={obj.number} className="question-btn" onClick={this.onChangeQuestion}>{obj.number}</button>
        })}
      </nav>
      
      <br />

      <main className="current-question">
        {this.props.testObj.questionList[this.state.currentQuestionNumber - 1].number}
      </main>

      <footer className="answers">

      </footer>
    </main>
  }

  startTest() {
    let date = new Date();
    let min = this.num - 1;
    let sec = this.num;

    this.props.onChangeTestStarted(); 
    this.setState({
      isTestStarted: true
    });

    setInterval(() => {
      sec--;

      if(min == 0 && sec == 1) {
        this.finishTest();
      }
      if(sec < 0) {
        sec = this.num - 1;
        min--;
      }

      this.setState({
        min,
        sec
      })
    }, 1000);
  }

  finishTest() {
    let date = new Date();
    this.props.history.push('/results');
  }

  render() {
    return (
      <article className="math-test">
        <hr /> 
        
        <h2>{this.props.testObj.name}</h2>
        <h3>20 задачи за 60 минути</h3>
      
        <header className="timer container-flex-row">
          <h3 className="flex-item-3">
            {
              !this.state.isTestStarted ? 
              <button className="test-btn" id="start-btn" onClick={this.startTest}>START</button> : 
              <button className="test-btn" id="finish-btn" onClick={this.finishTest}>FINISH</button>
            }
          </h3>
          <h3 className="flex-item-1">
            {this.state.isTestStarted ? 
            <CountdownCircleTimer
              isPlaying
              duration={this.num*this.num}
              colors={['#ed8035']}
            >
              {({ remainingTime }) => {
                let minutes = Math.floor(remainingTime / this.num)
                let seconds = remainingTime % this.num

                if(minutes < 10) {
                  minutes = "0" + minutes
                }
                
                if(seconds < 10) {
                  seconds = "0" + seconds
                }

                return `${minutes} : ${seconds}`
              }}
            </CountdownCircleTimer> : 
            
            <CountdownCircleTimer
              duration={this.num*this.num}
              colors={['#ed8035']}
            >
              {({ remainingTime }) => {
                let minutes = Math.floor(remainingTime / this.num)
                let seconds = remainingTime % this.num

                if(minutes < 10) {
                  minutes = "0" + minutes
                }
                
                if(seconds < 10) {
                  seconds = "0" + seconds
                }

                return `${minutes} : ${seconds}`
              }}
            </CountdownCircleTimer>}
          </h3>
          <h3 className="flex-item-1">
            
          </h3>
        </header>

        <hr />

        {this.state.isTestStarted ? this.getQuestions() : ""}
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
)(withRouter(TestMath));

TestMath.propTypes = {
  testObj: PropTypes.object
}