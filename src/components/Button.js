import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick}
            style={{ backgroundColor: color }} 
            className='btn'>{text}</button>
  )
};

/** Color default attribute **/
Button.defaultProps = {
    color: 'steelblue'
}

/** Defining data types **/
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
