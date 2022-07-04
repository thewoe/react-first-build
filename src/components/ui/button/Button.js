import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    hasTitle: PropTypes.bool,
    title: PropTypes.string
};

function Button({ children, onClick, hasTitle, title }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <button className='defaultbutton' onClick={onClick}>
            {children}
            {
                hasTitle 
                    &&  <p className='title'>
                            {title}
                        </p>
            }
        </button>
    );
}

export default Button;