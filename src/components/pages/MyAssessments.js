import { useState } from 'react';

import ButtonYes from '../ui/button/ButtonYes';
import ButtonNo from '../ui/button/ButtonNo.js';
import ToolTip from '../ui/tooltip/ToolTip';
import Modal from '../ui/modal/Modal.js';

function MyAssessments() {
    // Properties ----------------------------------
    const buttons = [];

    // Hooks ---------------------------------------
    const [modalVisibility, setModalVisibility] = useState(true);

    // Context -------------------------------------

    // Methods -------------------------------------
    const handleSetModalVisibilityTrue = () => setModalVisibility(true);

    const handleSetModalVisibilityFalse = () => setModalVisibility(false);

    // View ----------------------------------------
    buttons.push(
        <ToolTip text="I agree to terms">
          <ButtonYes hasTitle onClick={handleSetModalVisibilityFalse} />
        </ToolTip>
    );

    buttons.push(
        <ToolTip text="I disagree to terms">
            <ButtonNo hasTitle onClick={handleSetModalVisibilityTrue} />
        </ToolTip>
    );

    return (
        <>
            <h1>My Assessments</h1>
            {
                modalVisibility && (
                    <Modal title="Terms of Service" buttons={buttons}>
                        <p>Do you agree to our terms of service?</p>
                    </Modal>
                )
            }
        </>
    );
}

export default MyAssessments;