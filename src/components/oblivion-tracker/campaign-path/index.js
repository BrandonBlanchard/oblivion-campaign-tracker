import React from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import { campaignTree, campaignScenarioMap, ALLIANCES } from '../../../data/oblivion';
import { Line } from 'react-konva';
import { WHITE, GUARDIAN_GOLD, INFERNAL_RED, BLACK } from '../../../constants/colors';
import { selectedPlayerSelector } from '../../../selectors';

const winLossString = didWin => didWin === 1 ? 'win' : 'loss';

const getNextNode = (node, outcomeString, alliance) => {
    const nextScenarioIds = get(node, [outcomeString]);
    const nextScenario = nextScenarioIds.reduce((acc, id) => {
       const scenario = campaignScenarioMap[id];
       
       if(scenario.alliance === alliance || scenario.alliance === ALLIANCES.BOTH) {
           return scenario;
       }
       
       return acc;
    }, null);
    
    return nextScenario;
};

// A recursive function that returns an array of scenarios in order of completion;
const getScenarioPath = (outcomes, alliance, currentScenario, currentIndex) => {
    const outcomeString = winLossString(outcomes[currentIndex]);
    const nextIndex = currentIndex + 1;

    // If there are no more outcomes then the player may not have played this far.
    if(currentIndex >= outcomes.length) { return null; }
    
    const nextScenario = getNextNode(currentScenario, outcomeString, alliance);
    
    if(nextScenario === null) {
        return null;    
    }
    
    const futureScenarios = getScenarioPath(outcomes, alliance, nextScenario, nextIndex);
    
    // There were deeper scenarios than nextScenario
    if(futureScenarios !== null) {
        return [nextScenario, ...futureScenarios];
    }
    
    // Next scenario is the last completed scenario
    return [nextScenario];
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
    
    const linePath = scenarioPath.reduce((acc, scenario) => {
        const positions = get(nodePositionsMap, [scenario.id], null);
        
        if(!positions) { return acc; }

        const { x, y } = positions;
        acc.push(x);
        acc.push(y);
        
        return acc;
    }, []);
    
    return (
        <>
            <Line points={linePath} stroke={BLACK} strokeWidth={8} />
            <Line points={linePath} stroke={pathColor} strokeWidth={2} />
        </>
    );
};

export default CampaignPath;
