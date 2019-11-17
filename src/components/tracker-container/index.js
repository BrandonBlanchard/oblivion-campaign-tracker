import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import './index.css';
import OblivionTracker from '../oblivion-tracker';
import PlayerChooser from '../player-chooser';
import OmenDraws from '../omen-draws';
import { setPlayers } from '../../action-creators';
import { getPlayerData } from '../../fetchers/player-data';
import { playerListSelector, selectedPlayerNameSelector, selectedPlayerSelector } from '../../selectors';

const TrackerContainer = props => {
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const players = useSelector(playerListSelector);
    const selectedPlayerName = useSelector(selectedPlayerNameSelector);
    const selectedPlayer = useSelector(selectedPlayerSelector);
    const draws = get(selectedPlayer, ['cards'], 0);

    useEffect(() => {
        new Promise(async (resolve, reject) => {
            const players = await getPlayerData();
            dispatch(setPlayers(players));
            resolve();
        });
        
    }, []);
    
    return (
        <div className='tracker-container'>
            <div className='player-selection-container'>
                <div>
                    { players && <PlayerChooser players={players} selected={selectedPlayerName} /> }
                </div>
                <div>
                    { selectedPlayer && <OmenDraws count={draws} /> }
                </div>
            </div>
            <div className='tracker-container__campaign' ref={containerRef}>
                <OblivionTracker container={containerRef} />
            </div>
        </div> 
    );
};

export default TrackerContainer;