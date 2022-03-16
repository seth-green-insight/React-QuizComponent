import React, { Component } from 'react';


class QuizQuestionButton extends Component {

    render(button_text) {
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        )

    }

}

export default QuizQuestionButton;