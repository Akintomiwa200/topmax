import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/instruction');
    };

    return (
        <div className="flex flex-col w-full justify-center items-center min-h-[100vh]">
            <h1>Welcome to the Quiz App</h1>
            <Button text="Start Quiz" onClick={handleStartQuiz} />
        </div>
    );
};

export default HomePage;
