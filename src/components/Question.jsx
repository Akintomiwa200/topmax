import { useState } from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, onAnswerSelected }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        onAnswerSelected(answer);
    };

    return (
        <div className="flex flex-col justify-center items-center w-[100vw]">
            <h3 className='text-4xl'>{question.text}</h3>
            <div className=" grid grid-cols-2 h-[30vh] w-[69vw]">
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
