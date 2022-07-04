import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import './Layout.css';

function Layout({ children }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------
    
    // View ----------------------------------------
    return (
        <div className='centrepane'>
            <Header />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;