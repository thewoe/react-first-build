import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    // Properties ----------------------------------
    const getLinkStyle = ({isActive}) => (isActive ? 'navSelected' : null);

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <nav>
            <div className='navItem'>
                <NavLink to='/' className={getLinkStyle}>
                    My Modules
                </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/myassessments' className={getLinkStyle}>
                    My Assessments
                </NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/myschedule' className={getLinkStyle}>
                    My Schedule
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;