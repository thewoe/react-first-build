import Button from './Button';
import IconList from '../icon/IconList';

function ButtonShowAll({ onClick, hasTitle=false }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <Button onClick={onClick} hasTitle={hasTitle} title='Show All'>
            <IconList />
        </Button>
    );
}

export default ButtonShowAll;