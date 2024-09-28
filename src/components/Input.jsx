import PropTypes from 'prop-types';

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="input"
        />
    );
};

// PropTypes validation
Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // value can be a string or number and is required
    onChange: PropTypes.func.isRequired,  // onChange is a function and required
    placeholder: PropTypes.string,  // placeholder is a string and optional
};

export default Input;
