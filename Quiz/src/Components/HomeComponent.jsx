import  { Component } from "react";
import "../App.css";
import quizData from "./quizQuestion.json";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      questions: quizData,
    };
  }

  previous = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.max(prevState.currentQuestionIndex - 1, 0),
    }));
  };

  next = () => {
    const { currentQuestionIndex, questions } = this.state;
    if (currentQuestionIndex === questions.length - 1) {
      this.setState({ currentQuestionIndex: 0 });
    } else {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    }
  };

  quit = () => {
    const confirmQuit = window.confirm(
      "Are you sure you want to quit the game?"
    );

    if (confirmQuit) {
      alert("You quit the game");
      this.setState({ currentQuestionIndex: 0 });
    }
  };

  render() {
    const { currentQuestionIndex, questions } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const buttonText = isLastQuestion ? "Reset" : "Next";

    return (
      <section className="playground">
        <div className="quizcontainer">
          <h2>Question</h2>
          <p>{`${currentQuestionIndex + 1} of ${questions.length}`}</p>
          <h4>{currentQuestion.question}</h4>

          <div className="options">
            <div className="choices">{currentQuestion.optionA}</div>
            <div className="choices">{currentQuestion.optionB}</div>
            <div className="choices">{currentQuestion.optionC}</div>
            <div className="choices">{currentQuestion.optionD}</div>
          </div>

          <div className="button-container">
            <button className="button previousbutton" onClick={this.previous}>
              Previous
            </button>
            <button className="button nextbutton" onClick={this.next}>
              {buttonText}
            </button>
            <button className="button quitbutton" onClick={this.quit}>
              Quit
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Quiz;
