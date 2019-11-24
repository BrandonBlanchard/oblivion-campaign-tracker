import { PLAYER_DATA_URL } from '../constants';
import { ALLIANCES } from '../data/oblivion';
import { parse } from '@babel/parser';

const INDEXES = {
    name: 0,
    omen: 1,
};

const fetchPlayerData = async (url) => {
    const decoder = new TextDecoder('utf8');
    const response = await fetch(url);
    
    if(!response.ok) {
        return null;
    }
    
    const reader = response.body.getReader();
    const buffer = await reader.read();
    const data = decoder.decode(buffer.value)
    
    return data;
};

const decodePlayer = line => {
    const splitLine = line.split(',');
    const [name, allianceString, omen] = splitLine.slice(0, 3);
    const rawOutcomes = splitLine.slice(3);

    const outcomes = rawOutcomes.map( val => {
        if(val === "" || val.length < 1) { return null; }
        return parseFloat(val); 
    }).filter(val => val > -1);
    
    return {
        name,
        alliance: allianceString === ALLIANCES.GUARDIAN ? ALLIANCES.GUARDIAN : ALLIANCES.CORRUPTOR,
        cards: parseFloat(omen),
        outcomes
    };
};

export const getPlayerData = () => new Promise(async (resolve, reject) => {
    const playerData = await fetchPlayerData(PLAYER_DATA_URL);
    
    if(playerData === null) { resolve([]); }
    
    const lines = playerData.split('\n').slice(1);
    const players = lines.map(decodePlayer);

    resolve(players);
});
