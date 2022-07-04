import Button from './Button';
import IconMinus from '../icon/IconMinus';

function ButtonUnfavorite({ onClick, hasTitle=false }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <Button onClick={onClick} hasTitle={hasTitle} title='Remove From Favourites'>
            <IconMinus />
        </Button>
    );
}

export default ButtonUnfavorite;