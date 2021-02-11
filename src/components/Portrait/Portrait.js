import React from 'react';

import Header from './Header/Header';
import PortraitDesc from './PortraitDesc/PortraitDesc';
import PortraitImage from './PortraitImage/PortraitImage';
import PortraitClouds from './PortraitClouds/PortraitClouds';

import classes from './Portrait.module.scss';

const Portrait = () => (
  <div className={classes.Portrait}>
    <Header />
    
    <div className={classes.PortraitSearch}>
      <PortraitDesc />
      <PortraitImage />
    </div>
    
    <PortraitClouds />
  </div>
);

export default Portrait;