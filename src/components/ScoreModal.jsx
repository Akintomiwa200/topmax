import PropTypes from 'prop-types';

const ScoreModal = ({ score, onClose, totalQuestions }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white h-[40vh] rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center justify-center " >
                <h2 className="text-xl font-semibold m-8">You Score: {score}/{totalQuestions}</h2>
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
