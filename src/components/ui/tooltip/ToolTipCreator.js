import { useState } from 'react';

import Card from '../card/Card';

import './ToolTip.css';

export default function ToolTipCreator({ text, isMouseOver }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------
    const [toolTipVisibility, setToolTipVisibility] = useState('hidden');

    // Context -------------------------------------

    // Methods -------------------------------------
    const initiatingHoverTime = 500;
    const visibilityTime = 2500;

    const handleSetToolTipVisible = () => setToolTipVisibility('visible');

    const handleSetToolTipHidden = () => setToolTipVisibility('hidden');

    const displayToolTip = () => {
        setTimeout(handleSetToolTipVisible, initiatingHoverTime);
        setTimeout(handleSetToolTipHidden, visibilityTime);
    };

    // View ----------------------------------------
    if (isMouseOver && (toolTipVisibility==='hidden')) displayToolTip();
    if (!isMouseOver && (toolTipVisibility!=='hidden')) handleSetToolTipHidden();

    return (
        (toolTipVisibility === 'visible') &&
            <Card>
                <div className='ToolTipCreator'>
                    <p>{text}</p>
                </div>
            </Card>
    );
}