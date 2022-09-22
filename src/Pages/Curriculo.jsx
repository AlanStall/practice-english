import React from 'react';
import curriculo from '../../src/Alan_Stall_Curriculo-092022.webp';

export function Curriculo() {  

  return (
    <>
        <div 
            className="hero min-h-screen m-auto" 
            style={{ backgroundImage: `url(${curriculo})`, width: '41.5%' }}>
        </div>    
    </>
  );
}