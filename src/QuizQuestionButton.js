import React, { Component } from 'react';


class QuizQuestionButton extends Component {

    render(button_text) {

        const handleClick = () => {
            
        }


        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        )

    }

}

export default QuizQuestionButton;