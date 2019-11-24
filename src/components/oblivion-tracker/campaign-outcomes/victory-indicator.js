import React from 'react';
import { Group, Line } from 'react-konva';
import { INFERNAL_RED, GUARDIAN_GOLD, BLACK } from '../../../constants/colors';
import { ALLIANCES } from '../../../data/oblivion';

const size = 20;
const halfSize = size / 2;

const winIndicator = (color) => {
    const left = [-halfSize * 0.6, halfSize * 0.2];
    const bottom = [0, halfSize];
    const right = [halfSize * 1.4, -halfSize];
    
    return (
        <>
            <Line points={[...left, ...bottom, ...right]} stroke={BLACK} strokeWidth={9} />

            <Line points={[...left, ...bottom, ...right]} stroke={color} strokeWidth={5} />
        </>
    );
};

const lossIndicator = (color) => {
    const bottomLeft = [-halfSize, -halfSize];
    const bottomRight = [halfSize, -halfSize];
    const topLeft = [-halfSize, halfSize];
    const topRight = [halfSize, halfSize];
    
    return (
        <>
            <Line points={[...bottomLeft, ...topRight]} stroke={BLACK} strokeWidth={9} />   
            <Line points={[...bottomRight, ...topLeft]} stroke={BLACK} strokeWidth={9} />
    
            <Line points={[...bottomLeft, ...topRight]} stroke={color} strokeWidth={6} />
            <Line points={[...bottomRight, ...topLeft]} stroke={color} strokeWidth={6} />
        </>
    );
}

const VictoryIndicator = props => {
    const {
        x, y,
        outcome,
        alliance
    } = props;
    
    const victoryColor = alliance === ALLIANCES.GUARDIAN ? GUARDIAN_GOLD : INFERNAL_RED;
    const lossColor = alliance === ALLIANCES.GUARDIAN ? INFERNAL_RED : GUARDIAN_GOLD
    
    return (
        <Group x={x} y={y}>
            { outcome === 1 ? winIndicator(victoryColor) : lossIndicator(lossColor) }
        </Group>
    );
};

export default VictoryIndicator;
