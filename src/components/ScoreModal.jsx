import PropTypes from 'prop-types';

const ScoreModal = ({ score, onClose, totalQuestions }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold mb-4">Your Score: {score}/{totalQuestions}</h2>
                <button
                    onClick={onClose}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// PropTypes validation
ScoreModal.propTypes = {
    score: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    totalQuestions: PropTypes.number.isRequired,
};

export default ScoreModal;
