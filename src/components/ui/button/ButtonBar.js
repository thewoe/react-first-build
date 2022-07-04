import './ButtonBar.css';

function ButtonBar({ className, children }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <div className={'buttonbar ' + className}>
            {children}
        </div>
    );
}

export default ButtonBar;