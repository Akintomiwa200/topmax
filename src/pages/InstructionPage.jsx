import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const InstructionPage = () => {
    const navigate = useNavigate();

    const handleProceed = () => {
        navigate('/quiz');
    };

    return (
        <div className="instruction-page">
            <h2>Quiz Instructions</h2>
            <p>Read the instructions before starting the quiz...</p>
            <Button text="Proceed to Quiz" onClick={handleProceed} />
        </div>
    );
};

export default InstructionPage;
