import { useState } from 'react';
import Question from '../components/Question';
import Modal from '../components/ScoreModal';

const questions = [
    {
        text: "What is React?",
        options: ["Library", "Framework", "Language", "Tool"],
        correct: "Library",
    },
    {
        text: "Which of the following is a React Hook?",
        options: ["useState", "useStatus", "useEvent", "useAction"],
        correct: "useState",
    },
    {
        text: "Which command is used to create a new React project?",
        options: ["npm create-react-app", "npm new react-app", "npm start", "npm build"],
        correct: "npm create-react-app",
    },
];

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const handleAnswerSelected = (answer) => {
        setAnswers((prev) => {
            const newAnswers = [...prev];
            newAnswers[currentQuestionIndex] = answer;
            return newAnswers;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const getScore = () => {
        return answers.filter((answer, index) => answer === questions[index].correct).length;
    };

    return (
        <div className="quiz-page">
            {!isQuizCompleted ? (
                <>
                    <Question
                        question={questions[currentQuestionIndex]}
                        onAnswerSelected={handleAnswerSelected}
                    />
                    <div className="navigation-buttons">
                        <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                            Previous
                        </button>
                        <button onClick={handleNextQuestion}>
                            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </>
            ) : (
                <Modal score={getScore()} totalQuestions={questions.length} onClose={() => setIsQuizCompleted(false)} />
            )}
        </div>
    );
};

export default QuizPage;
