import Button from './Button';
import IconPencil from '../icon/IconPencil';

function ButtonEdit({ onClick, hasTitle=false }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <Button onClick={onClick} hasTitle={hasTitle} title='Edit'>
            <IconPencil />
        </Button>
    );
}

export default ButtonEdit;