import { useState } from 'react';
import Question from '../components/Question';
import Modal from '../components/ScoreModal';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';

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
        <div className="flex flex-col items-center justify-center h-[100vh]">
            {!isQuizCompleted ? (
                <>
                    <Question
                        question={questions[currentQuestionIndex]}
                        onAnswerSelected={handleAnswerSelected}
                    />
                    <div className="flex w-[50vw] justify-between my-8">
                        <button className='border border-red-400 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white text-2xl flex items-center gap-1 font-light' onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                            <FaLeftLong />  Previous
                        </button>
                        <button className='border border-red-400 px-8 py-2 rounded-lg hover:bg-red-500 hover:text-white text-2xl flex items-center gap-1 font-light' onClick={handleNextQuestion}>
                            <FaRightLong />   {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
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
