import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';

import { campaignTree } from '../../data/oblivion';
import { BORDER_OFFSET } from '../../constants/sizes';
import CampaignTreeBackground from './campaign-tree-background';
import PrologueTier from './campaign-layers/prologue-tier';
import VLayer from './campaign-layers/v-layer';
import CampaignPath from './campaign-path';
import CampaignOutcomes from './campaign-outcomes';
import { selectedPlayerSelector, playerListSelector } from '../../selectors';

const aspectRatio = 1.223;

const calculateSize = (setWidth, setHeight, setNodeRadius, container) => {
    if(container.current) {
        const w = container.current.clientWidth;
        setWidth(w);
        setHeight(w * aspectRatio);
        setNodeRadius(w/23);
    }
};

const OblivionTracker = props => {
    const dispatch = useDispatch();
    const {
        container
    } = props;
    const nodePositions = useSelector(state => state.nodeProperties.positions);
    const selectedPlayer = useSelector(selectedPlayerSelector);
    const playersList = useSelector(playerListSelector);
    
    const showAll = playersList.length > 0 &&  !selectedPlayer;
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [nodeRadius, setNodeRadius] = useState(0);


    useEffect(() => {
        const calculateSizeDI = () => calculateSize(setWidth, setHeight, setNodeRadius, container)
        window.addEventListener('resize', calculateSizeDI);
        
        calculateSizeDI();
        
        return () => window.removeEventListener('resize', calculateSizeDI);
    }, []);
    
    const tierHeight = height / 5;

    const prologueNodes = campaignTree[0];
    const tier2Through5 = campaignTree.slice(1, 5);;
    
    if(!container.current) {
        return (<></>);
    }
    
    return (
        <Stage width={width} height={height + BORDER_OFFSET * 2}>
            <CampaignTreeBackground width={width} height={height}/>
            <Layer>
                { selectedPlayer && <CampaignPath player={selectedPlayer} nodePositionsMap={nodePositions}/> }
                { showAll && playersList.map(player => <CampaignPath key={player.name} player={player} nodePositionsMap={nodePositions} shouldFuzz />) }
            </Layer>
            <Layer>
                <PrologueTier nodes={prologueNodes} x={width/2} y={0} radius={nodeRadius} dispatch={dispatch} />
                {tier2Through5.map((nodes, i) => <VLayer key={`tier_${i}`} nodes={nodes} x={width/2} y={tierHeight * (i + 1)} radius={nodeRadius} width={width} height={tierHeight} dispatch={dispatch} />)}
                <CampaignOutcomes player={selectedPlayer} nodePositionsMap={nodePositions} radius={nodeRadius} />
            </Layer>
        </Stage> 
    );
};

export default OblivionTracker;
