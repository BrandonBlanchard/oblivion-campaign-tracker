import React from 'react';

import './index.css';

const OmenDraws = props => {
    const { count } = props;
    
    return (
      <div className='omen-draw'>
          <div className='omen-draw__label'>Omen Draws</div>
          <div className='omen-draw__count'>{ count }</div>
          
      </div>  
    );
};

export default OmenDraws;
