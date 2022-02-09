import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log(e);
  }

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
    color: PropTypes.string
}

export default Button;
