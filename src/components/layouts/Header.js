import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <header>
            <Link to='/'>
                <img src='https://img.icons8.com/ios-filled/50/000000/conference-call.png' alt='Icon showing group'/>
            </Link>
            <Link to='/'>
                <h1>My Learning</h1>
            </Link>
            <div className='login'>
                <p>Welcome Graeme!</p>
            </div>
        </header>
    );
}

export default Header;