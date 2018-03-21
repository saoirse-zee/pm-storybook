import React from 'react';

export const constrainWidth = story => (
  <div style={{width: '420px'}}>
    {story()}
  </div>
);

export const background = story => (
  <div style={{background: '#EEEEEE'}}>
    {story()}
  </div>
);

export const pad = story => (
  <div style={{padding: '30px'}}>
    {story()}
  </div>
);
