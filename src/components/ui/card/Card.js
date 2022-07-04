import './Card.css';

function Card({ className, children }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <div className={'card ' + className}>
            {children}
        </div>
    );
}

export default Card;