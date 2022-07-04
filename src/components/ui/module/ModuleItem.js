import Card from '../card/Card';
import HoverCard from '../card/HoverCard';
import ButtonBar from '../button/ButtonBar';
import ButtonUnfavorite from '../button/ButtonUnfavorite';
import ButtonFavorite from '../button/ButtonFavorite';
import ButtonDelete from '../button/ButtonDelete';
import ButtonEdit from '../button/ButtonEdit';
import ButtonFavoriteOverlay from '../button/ButtonFavoriteOverlay';
import ToolTip from '../tooltip/ToolTip';

import './ModuleItem.css';

function ModuleItem({ module, handlers }) {
    // Properties ----------------------------------

    // Hooks ---------------------------------------

    // Context -------------------------------------

    // Methods -------------------------------------
    const handleFavorite = () => handlers.handleFavorite(module.ModuleID);

    const handleUnfavorite = () => handlers.handleUnfavorite(module.ModuleID);

    const handleEdit = () => handlers.handleEdit(module.ModuleID);

    const handleDelete = () => handlers.handleDelete(module.ModuleID);

    // View ----------------------------------------
    return (
        <HoverCard>
            <Card>
                { 
                    module.isFavorite && 
                        <ToolTip text='Click to unfavourite' >
                            <ButtonFavoriteOverlay unFavorite={handleUnfavorite}/>
                        </ToolTip>
                }
                <div className='item'>
                    <div className='image'>
                        <img src={module.ModuleImage} alt={module.ModuleName} />
                    </div>
                    <div className='content'>
                        <h2>{module.ModuleName} ({module.ModuleCode})</h2>
                        <h3>Level {module.ModuleLevel}</h3>
                    </div>
                    <div className='modulebuttons'>
                        <ButtonBar className='cardbar'>
                            {
                                module.isFavorite
                                    ?   <ToolTip text='Unfavourite'>
                                            <ButtonUnfavorite onClick ={handleUnfavorite} />
                                        </ToolTip>
                                    :   <ToolTip text='Favourite'>
                                            <ButtonFavorite onClick={handleFavorite} />
                                        </ToolTip>
                            }
                            <ToolTip text='Edit' >
                                <ButtonEdit onClick={handleEdit} />
                            </ToolTip>
                            <ToolTip text='Delete' >
                                <ButtonDelete onClick={handleDelete} />
                            </ToolTip>
                        </ButtonBar>
                    </div>
                </div>
            </Card>
        </HoverCard>
    );
}

export default ModuleItem;