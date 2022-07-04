import ModuleItem from './ModuleItem';

import './ModuleList.css';

function ModuleList({ modules, handlers }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------

    // View ----------------------------------------
    return (
        <div className='list'>
            {
                modules.map((module) => (
                    <ModuleItem
                        key={module.ModuleID}
                        module={module}
                        handlers={handlers}
                    />
                ))
            }
        </div>
    );
}

export default ModuleList;