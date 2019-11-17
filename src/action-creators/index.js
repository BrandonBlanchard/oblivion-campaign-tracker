export const SET_NODE_POSITION_ACTION_TYPE = 'SET_NODE';
export const SET_SELECTED_PLAYER = 'SET_SELECTED_PLAYER';
export const SET_PLAYERS = 'SET_PLAYERS';

export const setNodePosition = (id, x, y) => ({
    type: SET_NODE_POSITION_ACTION_TYPE,
    id,
    x,
    y
});

export const setSelectedPlayer = player => ({
   type: SET_SELECTED_PLAYER,
   player
});

export const setPlayers = players => ({
    type: SET_PLAYERS,
    players
});