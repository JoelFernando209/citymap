import React from 'react';

import classes from './PortraitClouds.module.scss';

const PortraitClouds = () => {
  const classCloud = id => {
    return [classes.Wave, classes[`Wave-${id}`]].join(' ');
  };
  
  return (
    <div className={classes.PortraitClouds}>
      <div className={classCloud(1)}></div>
      <div className={classCloud(2)}></div>
      <div className={classCloud(3)}></div>
      <div className={classCloud(4)}></div>
    </div>
  )
};

export default PortraitClouds;