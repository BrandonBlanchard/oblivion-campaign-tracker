import React from 'react';

import VictoryIndicator from './victory-indicator';
import { campaignTree, ALLIANCES } from '../../../data/oblivion';
import { getScenarioPath } from '../../../utils/campaign-tree';
import { nodePositionsSelector, selectedPlayerSelector } from '../../../selectors/index';

const ONE_DEGREE = 180 / Math.PI;

const positionsReducer = (scenario, nodePositionsMap) => nodePositionsMap[scenario.id];

const CampaignOutcomes = props => {
    const {
        player,
        nodePositionsMap,
        radius
    } = props;
    if(!player) {return <></>; }
    
    const {
        alliance,
        outcomes
    } = player;
    
    const initialScenario = campaignTree[0].filter(({ id }) => id === 0)[0];
    const partialPath = getScenarioPath(outcomes, alliance, initialScenario, 0);
    const campaignPath = [initialScenario, ...partialPath];
    const positionPairs = campaignPath.map(scenario => positionsReducer(scenario, nodePositionsMap));
    const completedScenarioPositions = positionPairs.slice(0, outcomes.length);

    // Offsets
    const xOffset = radius * 1.2 * Math.sin(2.4 * ONE_DEGREE);
    const yOffset = radius * 1.2 * Math.cos(2.4 * ONE_DEGREE);

    return (
        <>
            { completedScenarioPositions.map( ({x, y}, i) => <VictoryIndicator key={`indicator-${i}`} x={x + xOffset} y={y + yOffset} outcome={outcomes[i]} alliance={alliance} />) }
        </>
    );
};

export default CampaignOutcomes;