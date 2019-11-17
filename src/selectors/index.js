import get from 'lodash/get';

export const playerListSelector = state => state.playerData.all;

export const selectedPlayerNameSelector = state => state.playerData.selected;

export const selectedPlayerSelector = state => {
    const players = playerListSelector(state);
    const selectedName = selectedPlayerNameSelector(state);
    const player = get(players.filter(playerCard => playerCard.name === selectedName), [0], null);
    
    return player;
};
