import PropTypes from 'prop-types';

const Dropdown = ({ options, onChange, value }) => {
    return (
        <select value={value} onChange={onChange} className="dropdown">
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

// PropTypes validation
Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,  // options should be an array of strings and required
    onChange: PropTypes.func.isRequired,  // onChange should be a function and required
    value: PropTypes.string.isRequired,  // value should be a string and required
};

export default Dropdown;
