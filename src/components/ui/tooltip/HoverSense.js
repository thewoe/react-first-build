import React from 'react';
import { useState } from 'react';

function HoverSense({ children }) {
  // Properties ----------------------------------

  // Hooks ---------------------------------------
  const [isHovering, setIsHovering] = useState(false);

  // Context -------------------------------------

  // Methods -------------------------------------
  const handleMouseOver = () => setIsHovering(true);

  const handleMouseOut = () => setIsHovering(false);

  // View ----------------------------------------
  return (
    <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} >
      {
        React.Children.map(children, (child) => {
          return React.cloneElement(child, {isMouseOver: isHovering});
         })
      }
    </div>
  );
}

export default HoverSense;