import { useState } from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, onAnswerSelected }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        onAnswerSelected(answer);
    };

    return (
        <div className="question-container">
            <h3>{question.text}</h3>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option ${selectedAnswer === option ? 'selected' : ''}`}
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

// PropTypes validation
Question.propTypes = {
    question: PropTypes.shape({
        text: PropTypes.string.isRequired,  // question text should be a string and required
        options: PropTypes.arrayOf(PropTypes.string).isRequired,  // options should be an array of strings and required
    }).isRequired,
    onAnswerSelected: PropTypes.func.isRequired,  // onAnswerSelected should be a function and required
};

export default Question;
