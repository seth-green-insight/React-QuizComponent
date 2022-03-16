import React, { Component } from 'react';
import QuizEnd from './QuizEnd';
import QuizQuestion from './QuizQuestion'

let quizData = require('./quiz_data.json')


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render(){

        const isQuizEnd = () => {
            if (this.state.quiz_position - 1 === quizData.quiz_questions.length) {
                return true;
            } else {
                return false;
            }
        };

        return (
            <div>
                {isQuizEnd && (
                    <QuizEnd />
                )}

                {!isQuizEnd && (
                    <QuizQuestion 
                        quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
                    />
                )}
            </div>
        )

    }

};


export default Quiz;