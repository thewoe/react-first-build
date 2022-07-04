import Card from '../card/Card.js';
import ButtonBar from '../button/ButtonBar.js';

import './Modal.css';

export default function Modal({ title, children, buttons }) {
  // Properties ----------------------------------

  // Hooks ---------------------------------------

  // Context -------------------------------------

  // Methods -------------------------------------

  // View ----------------------------------------
  return (
    <div className='modaloverlay'>
      <main className='modalpane'>
        <Card>
          <header>
            <p>{title}</p>
          </header>
          <main className='modaldescription'>
            {children}
          </main>
          <div className='modalbuttons'>
            <ButtonBar>
              { 
                buttons 
                  && buttons.map(button => button) 
              }
            </ButtonBar>
          </div>
        </Card>
      </main>
    </div>
  );
}