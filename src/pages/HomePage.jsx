import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/instruction');
    };

    return (
        <div className="home-page">
            <h1>Welcome to the Quiz App</h1>
            <Button text="Start Quiz" onClick={handleStartQuiz} />
        </div>
    );
};

export default HomePage;
