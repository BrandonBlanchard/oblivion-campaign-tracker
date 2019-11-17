import React from 'react';
import get from 'lodash/get';

import { campaignTree, campaignScenarioMap, ALLIANCES } from '../../../data/oblivion';
import { Line } from 'react-konva';
import { GUARDIAN_GOLD, INFERNAL_RED, BLACK } from '../../../constants/colors';
import { getScenarioPath } from '../../../utils/campaign-tree';

const linePathReducer = (acc, scenario, nodePositionsMap) => {
    const positions = get(nodePositionsMap, [scenario.id], null);
    
    if(!positions) { return acc; }

    const { x, y } = positions;
    acc.push(x);
    acc.push(y);
    
    return acc;
};

const CampaignPath = props => {
    const { 
        nodePositionsMap,
        player
    } = props;
    const {
        alliance,
        outcomes
    } = player;
    
    const pathColor = alliance === ALLIANCES.GUARDIAN ? GUARDIAN_GOLD : INFERNAL_RED;
    const initialScenario = campaignTree[0].filter(({ id }) => id === 0)[0];
    const partialScenarioPath = getScenarioPath(outcomes, alliance, initialScenario, 0);

    if(partialScenarioPath === null) { return <></>; }
    
    const scenarioPath = [initialScenario, ...partialScenarioPath];
    // An array of coordinates in [x1,y1,x2,y2,...] order.
    const linePath = scenarioPath.reduce((acc, scenario) => linePathReducer(acc, scenario, nodePositionsMap), []);
    
    
    return (
        <>
            <Line points={linePath} stroke={BLACK} strokeWidth={8} />
            <Line points={linePath} stroke={pathColor} strokeWidth={2} />
        </>
    );
};

export default CampaignPath;
