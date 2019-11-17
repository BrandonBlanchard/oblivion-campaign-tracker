import React from 'react';

import CampaignNode from '../campaign-node';

const PrologueTier = props => {
    const {
        x,
        y,
        radius,
        nodes,
        dispatch
    } = props;
    
    return nodes.map(({ name, id, summary, tier }, i) => <CampaignNode key={id} id={id} x={x + 0} y={(y + radius * 1.28) * 2 * i + radius} radius={radius} tier={tier + 1} name={name} dispatch={dispatch} />);
};

export default PrologueTier;