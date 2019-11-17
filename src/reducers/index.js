import assign from 'lodash/assign';
import { combineReducers } from 'redux';

import { 
    SET_NODE_POSITION_ACTION_TYPE,
    SET_SELECTED_PLAYER,
    SET_PLAYERS
} from '../action-creators';

const defaultState = {
    nodeProperties: {
        positions: {},
    },
    playerData: {
        selected: null,
        all: []
    }
};

const setNodePositionReducer = (state, action) => {
    const node = { x: action.x, y: action.y, id: action.id };
    const { positions: oldNodePositions } = state;
    const positions = assign({}, oldNodePositions, { [action.id]: node });
    
    return assign({}, state, { positions });
};

const nodeProperties = (state = defaultState.nodeProperties, action) => {
    switch(action.type) {
        case SET_NODE_POSITION_ACTION_TYPE:
            return setNodePositionReducer(state, action);
        default:
            return state;
    }
};

const setPlayersReducer = (state, { players }) => assign({}, state, { all: players });
    
const setPlayerReducer = (state, { player }) => assign({}, state, { selected: player });

const playerData = (state = defaultState.playerData, action) => {
    switch(action.type) {
        case SET_SELECTED_PLAYER:
            return setPlayerReducer(state, action);
        case SET_PLAYERS:
            return setPlayersReducer(state, action);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    nodeProperties,
    playerData
});

export default rootReducer;