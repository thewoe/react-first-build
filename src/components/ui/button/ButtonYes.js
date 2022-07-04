import Button from './Button';
import IconCheckmark from '../icon/IconCheckmark';

function ButtonYes({ onClick, hasTitle=false }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <Button onClick={onClick} hasTitle={hasTitle} title='Yes'>
            <IconCheckmark />
        </Button>
    );
}

export default ButtonYes;