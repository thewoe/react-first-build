import HoverSense from './HoverSense.js';
import ToolTipCreator from './ToolTipCreator.js';

import './ToolTip.css';

function ToolTip({ children, text }) {
  // Properties ----------------------------------

  // Hooks ---------------------------------------

  // Context -------------------------------------

  // Methods -------------------------------------

  // View ----------------------------------------
    return (
      <div className='ToolTip'>
        <HoverSense>
          {children}
          <ToolTipCreator text={text} />
        </HoverSense>
      </div>
  );
}

export default ToolTip;