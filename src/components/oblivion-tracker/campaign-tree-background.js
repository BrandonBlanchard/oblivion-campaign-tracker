import React from 'react';
import {
  Circle,
  Layer,
  RegularPolygon,
  Line
} from 'react-konva';

import {
  INFERNAL_RED_DARK,
  ARCANE_GREY,
  BLACK
} from './../../constants/colors';

const CampaignTreeBackground = props => {
    const {
      width,
      height
    } = props;
    
    const stackedSpheresRadius = height / 10;
    const horizontalCenter = width / 2;
    const verticalCenter = height / 2;
    
    return (
      <>
        <Layer name='background-layer'>

            {/* Vertical Stack of 5 */}
            <Circle x={horizontalCenter} y={stackedSpheresRadius} radius={stackedSpheresRadius} stroke={INFERNAL_RED_DARK} strokeWidth={1} />
            <Circle x={horizontalCenter} y={stackedSpheresRadius * 3} radius={stackedSpheresRadius} stroke={INFERNAL_RED_DARK} strokeWidth={1} />
            <Circle x={horizontalCenter} y={stackedSpheresRadius * 5} radius={stackedSpheresRadius} stroke={INFERNAL_RED_DARK} strokeWidth={1} />
            <Circle x={horizontalCenter} y={stackedSpheresRadius * 7} radius={stackedSpheresRadius} stroke={INFERNAL_RED_DARK} strokeWidth={1} />
            <Circle x={horizontalCenter} y={stackedSpheresRadius * 9} radius={stackedSpheresRadius} stroke={INFERNAL_RED_DARK} strokeWidth={1} />
            {/* Middle Triangle */}
            <RegularPolygon x={horizontalCenter} y={stackedSpheresRadius * 5 } sides={3} radius={stackedSpheresRadius} stroke={INFERNAL_RED_DARK} strokeWidth={1} rotation={180}/>
            {/* Line with circle on top */}
            <Line points={[horizontalCenter, stackedSpheresRadius * 4.5, horizontalCenter, stackedSpheresRadius * 3.5]} stroke={INFERNAL_RED_DARK} />
            <Circle x={horizontalCenter} y={stackedSpheresRadius * 3.5} radius={10} stroke={INFERNAL_RED_DARK} strokeWidth={1} fill={BLACK} />
            
        </Layer>
        <Layer>
            {/* Medium Large Circle towards center */}
            <Circle x={horizontalCenter} y={verticalCenter} radius={stackedSpheresRadius * 2} stroke={ARCANE_GREY} strokeWidth={1} />
            {/* Large Circle towards center */}
            <Circle x={horizontalCenter} y={verticalCenter - stackedSpheresRadius/2} radius={stackedSpheresRadius * 3.5} stroke={ARCANE_GREY} strokeWidth={1} />
            {/* Huge Circle towards the top */}
            <Circle x={horizontalCenter} y={stackedSpheresRadius * -2} radius={stackedSpheresRadius * 6} stroke={ARCANE_GREY} strokeWidth={1} />
            {/* Huge Circle towards the bottom */}
            <Circle x={horizontalCenter} y={stackedSpheresRadius * 12} radius={stackedSpheresRadius * 6} stroke={ARCANE_GREY} strokeWidth={1} />
            
            <RegularPolygon sides={4} radius={stackedSpheresRadius} x={horizontalCenter} y={stackedSpheresRadius * 6} stroke={ARCANE_GREY} />
        </Layer>
      </>  
    );
};

export default CampaignTreeBackground;