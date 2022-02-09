import PropTypes from 'prop-types';
import Button from './Button';

// Can be props.title, but can write is as an object destructured:
const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
        </header>
    );
};

/** Another way to pass a prop without passing it in App.js 
 * If there's both, App.js will overwrite this  **/
Header.defaultProps = {
    title: 'Task Tracker'
}

/** Proptypes defined data type to make your programs more robust and catch errors **/
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/** Styles **/
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
