import React from 'react';

import classes from './Presentation.module.scss';

import AppCityMap from '../../assets/app-citymap.png';

const Presentation = () => (
  <div className={classes.Presentation}>
    <div className={classes.Container}>
      <div className={classes.Title}>Get Start Search</div>
      <div className={classes.Subtitle}>Connect with city map</div>
      
      <img src={AppCityMap} alt='App CityMap' />
    </div>
  </div>
);

export default Presentation;