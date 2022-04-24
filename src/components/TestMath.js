import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreator from "../redux/actions";
import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";

const CurrentTest = {
  Name: "",
  StartedTime: "",
  FinishedTime: "",
  Questions: [],
  Answers: {
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "16": "",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
  }
};

let LocalUser = {
  HasStartedTest: false,
  History: [],
  LastTest: CurrentTest
}

class TestMath extends Component {
  constructor(props) {
    super(props);

    this.num = 60;
    this.test = this.props.testObj;

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
    this.onAnswerClicked = this.onAnswerClicked.bind(this);
  }

  componentDidMount() {
    LocalUser.LastTest.Questions = this.props.testObj.questionList; 
  }

  onAnswerClicked(e) {
    const btnA = document.getElementById("a");
    const btnB = document.getElementById("b");
    const btnC = document.getElementById("c");
    const btnD = document.getElementById("d");

    let btnId = e.target.id;
    LocalUser.LastTest.Answers[this.state.currentQuestionNumber] = btnId;
    localStorage.setItem("hakamatata-user", JSON.stringify(LocalUser));
    
    switch(btnId) {
      case "a": 
        btnA.style.border = "3px solid green";
        btnB.style.border = "2px solid silver";
        btnC.style.border = "2px solid silver";
        btnD.style.border = "2px solid silver";
        break;
      case "b": 
        btnB.style.border = "3px solid green";
        btnA.style.border = "2px solid silver";
        btnC.style.border = "2px solid silver";
        btnD.style.border = "2px solid silver";
        break;
      case "c": 
        btnC.style.border = "3px solid green";
        btnA.style.border = "2px solid silver";
        btnB.style.border = "2px solid silver";
        btnD.style.border = "2px solid silver";
        break;
      case "d": 
        btnD.style.border = "3px solid green";
        btnA.style.border = "2px solid silver";
        btnB.style.border = "2px solid silver";
        btnC.style.border = "2px solid silver";
        break;
      default: break;
    }
  }

  onChangeQuestion(e) {
    this.setState({
      currentQuestionNumber: e.target.id
    });

    const btnA = document.getElementById("a");
    const btnB = document.getElementById("b");
    const btnC = document.getElementById("c");
    const btnD = document.getElementById("d");

    btnA.style.border = "2px solid silver";
    btnB.style.border = "2px solid silver";
    btnC.style.border = "2px solid silver";
    btnD.style.border = "2px solid silver";

    if(LocalUser.LastTest.Answers[e.target.id] !== "") {
      document.getElementById(LocalUser.LastTest.Answers[e.target.id]).style.border = "3px solid green";
    }

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

      <main className="current-question">
        <img src={this.props.testObj.questionList[this.state.currentQuestionNumber - 1].taskImage} alt={"Task-"+this.props.testObj.questionList[this.state.currentQuestionNumber - 1].number} width="340px"/>
        {/* <br /> */}
      </main>

      <footer className="answers">
        {/* <h4>Избери</h4> */}
        <div className="answers-wrapper container-flex-row">
          <button id="a" className="answer-btn flex-item-1" onClick={this.onAnswerClicked}>а</button>
          <button id="b" className="answer-btn flex-item-1" onClick={this.onAnswerClicked}>б</button>
        {/* </div>
        <div className="answers-wrapper container-flex-row"> */}
          <button id="c" className="answer-btn flex-item-1" onClick={this.onAnswerClicked}>в</button>
          <button id="d" className="answer-btn flex-item-1" onClick={this.onAnswerClicked}>г</button>
        </div>
      </footer>
      <br />
    </main>
  }

  startTest() {
    let date = new Date();
    let min = this.num - 1;
    let sec = this.num;

    if(localStorage.getItem("hakamatata-user")) {
      LocalUser = JSON.parse(localStorage.getItem("hakamatata-user"));
      LocalUser.LastTest = CurrentTest;
    }
    
    LocalUser.HasStartedTest = true;
    LocalUser.LastTest.StartedTime = date;
    LocalUser.LastTest.Name = this.props.testObj.name;
    localStorage.setItem("hakamatata-user", JSON.stringify(LocalUser));

    this.props.onChangeTestStarted(); 
    this.setState({
      isTestStarted: true
    });

    document.getElementById("main-nav").style.display = "none";
    document.getElementById("test-links").style.display = "none";

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
    LocalUser.HasStartedTest = false;
    LocalUser.LastTest.FinishedTime = date;

    let historyObj = {
      name: LocalUser.LastTest.Name,
      date: LocalUser.LastTest.StartedTime,
      startTime: (LocalUser.LastTest.StartedTime.getHours() < 10 ? 
      "0" + LocalUser.LastTest.StartedTime.getHours() : 
      LocalUser.LastTest.StartedTime.getHours()) + ":" + 
      (LocalUser.LastTest.StartedTime.getMinutes() < 10 ? 
      "0" + LocalUser.LastTest.StartedTime.getMinutes() :
      LocalUser.LastTest.StartedTime.getMinutes()),
      time: LocalUser.LastTest.FinishedTime - LocalUser.LastTest.StartedTime,
      rightAnswers: 0,
      points: 0
    }

    for (let i = 0; i < 20; i++) {
      if(LocalUser.LastTest.Questions[i]["rightAnswer"] === LocalUser.LastTest.Answers[(i + 1).toString()]) {
        historyObj.rightAnswers++;
        historyObj.points += 5;
      }
    }

    LocalUser.History.push(historyObj);
    localStorage.setItem("hakamatata-user", JSON.stringify(LocalUser));

    this.props.onChangeTestFinished(); 
    this.setState({
      isTestStarted: false,
      isTestFinished: true
    });

    document.getElementById("main-nav").style.display = "inherit";
    document.getElementById("test-links").style.display = "inherit";
    this.props.history.push('/results');
  }

  render() {
    return (
      <article className="math-test">
        <hr /> 
        
        <h2>{this.props.testObj.name}</h2>
        <h3>20 задачи за 60 минути</h3>
        <h3>5 точки за всеки верен отговор</h3>
        <h3>100 възможни точки общо</h3>
      
        <header className="timer container-flex-row">
          <h3 className="flex-item-6">
            {
              !this.state.isTestStarted ? 
              <button className="test-btn" id="start-btn" onClick={this.startTest}>НАЧАЛО</button> : 
              <button className="test-btn" id="finish-btn" onClick={this.finishTest}>КРАЙ</button>
            }
          </h3>
          <h3 className="flex-item-1" style={{padding: "30px"}}>
            <CountdownCircleTimer
              isPlaying={this.state.isTestStarted}
              duration={this.num*this.num}
              colors={["#f4a232"]}
              onComplete={() => {
                return this.finishTest();
              }}
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
            </CountdownCircleTimer>
          </h3>
          <h3 className="flex-item-1">
            
          </h3>
        </header>

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