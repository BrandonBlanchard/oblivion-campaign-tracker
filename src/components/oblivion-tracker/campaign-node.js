import React, { useEffect } from 'react';

import { setNodePosition } from '../../action-creators';
import { Circle, Text, Group, RegularPolygon } from "react-konva";
import { WHITE, BLACK } from '../../constants/colors';

const TierDiamonds = (tier, centerX, centerY, diamondRadius) => {
    const diamondDiameter = diamondRadius * 2;
    const diamondMargin = 2;
    const diamonds = [];
    const tierDiamondsOffset = (diamondDiameter + diamondMargin) * (tier-1) / 2;
    const origin = centerX - tierDiamondsOffset;
    
    for(let i = 0; i < tier; i += 1) {
        const x = origin + i * (diamondDiameter + diamondMargin);
        
        diamonds.push(
            <RegularPolygon key={`${x}-${centerY}`} x={x} y={centerY} radius={diamondRadius} sides={4} stroke={WHITE} fill={WHITE} strokeWidth={1}/>  
        );
    }
    
    return diamonds;
};

const CampaignNode = props => {
    const {
        id,
        tier,
        name,
        x,
        y,
        radius,
        dispatch
    } = props;

    const tierDiamondY = radius - radius * .5;
    const diamondRadius = radius / 16;
    const textStart = {
        x: -radius,
        y: -radius * .8
    };
    
    useEffect(() => {
        dispatch(setNodePosition(id,x,y));
    }, [x, y, id]);
    
    
    return (
        <Group x={x} y={y}>
            <Circle x={0} y={0} radius={radius} stroke={WHITE} strokeWidth={1.5} fill={BLACK} />
            <Text 
                x={textStart.x}
                y={textStart.y}
                width={radius * 2}
                padding={8}
                text={name}
                align='center'
                fill={WHITE}
                fontSize={radius * 0.32}
                fontFamily='Times New Roman' />
            { TierDiamonds(tier, 0, tierDiamondY, diamondRadius) }
        </ Group>
    );
};

export default CampaignNode;
