import Button from './Button';
import IconCheckmark from '../icon/IconCheckmark';

function ButtonFavorite({ onClick, hasTitle=false }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <Button onClick={onClick} hasTitle={hasTitle} title='Favourite'>
            <IconCheckmark />
        </Button>
    );
}

export default ButtonFavorite;