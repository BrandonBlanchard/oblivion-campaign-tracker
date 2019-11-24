import { campaignScenarioMap, ALLIANCES } from '../data/oblivion';
import get from 'lodash/get';

export const winLossString = didWin => didWin === 1 ? 'win' : 'loss';

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
export const getScenarioPath = (outcomes, alliance, currentScenario, currentIndex) => {
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