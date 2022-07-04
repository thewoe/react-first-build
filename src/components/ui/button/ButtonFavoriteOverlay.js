import IconHeart from '../icon/IconHeart';

import './Button.css'

function ButtonFavoriteOverlay({ children, unFavorite }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <div className='favoriteoverlay'>
            {
                <div className='favorite' onClick={unFavorite}>
                    <IconHeart />
                </div>
            }
            {children}
        </div>
    );
}

export default ButtonFavoriteOverlay;