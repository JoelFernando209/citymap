import React from 'react';

import Header from './Header/Header';
import PortraitDesc from './PortraitDesc/PortraitDesc';

import classes from './Portrait.module.scss';

const Portrait = () => (
  <div className={classes.Portrait}>
    <Header />
    
    <div className={classes.PortraitSearch}>
      <PortraitDesc />
    </div>
  </div>
);

export default Portrait;