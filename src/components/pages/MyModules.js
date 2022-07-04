import { useState } from "react";
import ModuleList from "../ui/module/ModuleList";
import startingModules from '../../data/modules';
import './MyModules.css';
import ButtonBar from "../ui/button/ButtonBar";
import ButtonShowAll from "../ui/button/ButtonShowAll";
import ButtonShowFavorites from "../ui/button/ButtonShowFavorites";
import ToolTip from '../ui/tooltip/ToolTip';
import ButtonNo from "../ui/button/ButtonNo";
import ButtonYes from "../ui/button/ButtonYes";
import Modal from "../ui/modal/Modal";

function MyModules() {
    // Properties ----------------------------------
    // Hooks ---------------------------------------
    const [modules, setModules] = useState(startingModules);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalTitle, setModalTitle] = useState(undefined);
    const [modalDescription, setModalDescription] = useState(undefined);
    const [modalButtons, setModalButtons] = useState([]);
    // Context -------------------------------------
    // Methods -------------------------------------
    const handleShowAll = () => setModules(startingModules);

    const handleShowFavorites = () => setModules(modules.filter((module) => module.isFavorite));

    const handleFavorite = moduleId => setModules(
        modules.map((module) => (
            module.ModuleID === moduleId ? { ...module, isFavorite: true } : module
        ))
    );

    const handleUnfavorite = moduleId => setModules(
        modules.map((module) => (
            module.ModuleID === moduleId ? { ...module, isFavorite: false } : module
        ))
    );

    const handleDelete = id => {
        setModules(modules.filter((module) => module.ModuleID !== id));
        handleSetModalVisibilityFalse();
    }

    const handleDeleteRequest = id => {
        initialiseDeleteModal(id);
        setModalVisibility(true);
    };

    const handleEdit = moduleId => console.log(moduleId + " requires modification");

    const handleSetModalVisibilityFalse = () => setModalVisibility(false);

    const createModal = (title, description, buttons) => {
        setModalTitle(title);
        setModalDescription(description);
        setModalButtons(buttons);
    };

    const initialiseDeleteModal = id => {
        const selectedModule = modules.find((module) => module.ModuleID === id);
        createModal(
            "Confirm Module Deletion",
            `Do you want to delete module '${selectedModule.ModuleCode} (${selectedModule.ModuleName})'?`,
            [
                <ToolTip text="Click to delete module">
                    <ButtonYes hasTitle onClick={() => handleDelete(id)} />
                </ToolTip>,
                <ToolTip text="Click to retain module">
                    <ButtonNo hasTitle onClick={handleSetModalVisibilityFalse} />
                </ToolTip>
            ]
        );
    }
    // View ----------------------------------------
    return (
        <>
            <h1>My Modules</h1>
            <div className='modulebuttons'>
                <ButtonBar className='pagebar'>
                    <ToolTip text='Show all modules'>
                        <ButtonShowAll hasTitle onClick={handleShowAll} />
                    </ToolTip>
                    <ToolTip text='Show favourite modules'>
                        <ButtonShowFavorites hasTitle onClick={handleShowFavorites} />
                    </ToolTip>
                </ButtonBar>
            </div>
            {
                modules.length > 0
                    ?
                    <ModuleList
                        modules={modules}
                        handlers={{ handleFavorite, handleUnfavorite, handleEdit, handleDelete: handleDeleteRequest }}
                    />
                    :
                    "No modules found"
            }
            {
                modalVisibility &&
                <Modal key={module.ModuleID} title={modalTitle} buttons={modalButtons}>
                    {modalDescription}
                </Modal>
            }
        </>
    );
}

export default MyModules;