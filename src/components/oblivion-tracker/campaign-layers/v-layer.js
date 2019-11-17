import React from 'react';
import { Group } from 'react-konva';
import sortBy from 'lodash/sortBy'; 

import CampaignNode from './../campaign-node';

const nodePlotter = (min, max, radius, node, dispatch, i, arr) => {
    const scalar = arr.length > 1 ? (i + 1) / (arr.length + 1) : 0.5;
    
    const xMin = Math.min(min[0], max[0]);
    const xMax = Math.max(min[0], max[0]);
    const yMin = Math.min(min[1], min[1]);
    const yMax = Math.min(max[1], min[1]);

    const xRange = xMax - xMin;
    const yRange = yMax - yMin;
    
    const xPosition = xRange * scalar + xMin;
    const yPosition = yRange * scalar + yMin;

    return (<CampaignNode key={node.id} id={node.id} x={xPosition} y={yPosition} node={node.tier} name={node.name} radius={radius} tier={node.tier + 1} dispatch={dispatch} />);
};

const VLayer = props => {
    const {
        x, y,
        tier,
        radius,
        nodes,
        width,
        height,
        dispatch
    } = props;
    const allNodes = sortBy(nodes, ['alliance', 'order']);
    const halfWidth = width/2;
    const guardianBottom = [x + -halfWidth, y + height/2];
    const corruptorBottom = [x + halfWidth, y + height/2];

    return (allNodes.map((node, i, arr) => nodePlotter(corruptorBottom, guardianBottom, radius, node, dispatch, i, arr)));
};

export default VLayer;
