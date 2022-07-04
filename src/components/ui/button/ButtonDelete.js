import Button from './Button';
import IconTrashCan from '../icon/IconTrashCan';

function ButtonDelete({ onClick, hasTitle=false }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <Button onClick={onClick} hasTitle={hasTitle} title='Delete'>
            <IconTrashCan />
        </Button>
    );
}

export default ButtonDelete;