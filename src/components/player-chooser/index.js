import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import get from 'lodash/get';

import { selectedPlayerSelector, selectedPlayerNameSelector } from '../../selectors';
import { setSelectedPlayer } from '../../action-creators';

import './index.css';

const getOptions = players => players.map(player => ({ value: player, label: player.name }));

const PlayerChooser = props => {
    const {
      players,
      selected
    } = props;
    
    const dispatch = useDispatch();
    const selectedPlayer = useSelector(selectedPlayerSelector);
    const selectedPlayerName = useSelector(selectedPlayerNameSelector);
    
    const options = getOptions(players);
    const changePlayerHandler = (newSelection => {
        dispatch(setSelectedPlayer(newSelection.label))
    });
    
    const selectedOption = get(options.filter(option => option.label === selectedPlayerName), [0], null);

    return (
      <div className='player-selector'>
        <Select options={options} onChange={changePlayerHandler} value={selectedOption} />
      </div>
    );
};

export default PlayerChooser;
