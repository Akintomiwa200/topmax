import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='border border-red-300 text-2xl tet-red-500 my-4 rounded-2xl px-4' >
            {text}
        </button>
    );
};

// PropTypes validation
Button.propTypes = {
    text: PropTypes.string.isRequired,  // text should be a string and is required
    onClick: PropTypes.func.isRequired, // onClick should be a function and is required
};

export default Button;
