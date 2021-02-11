import React from 'react';

import LocationIcon from '../../../assets/location-icon.svg';
import LocationTower from '../../../assets/location-tower.svg';

import classes from './PortraitImage.module.scss';

const PortraitImage = () => (
  <div className={classes.PortraitImage}>
    <img src={LocationTower} alt='Tower' className={classes.Tower} />
    <img src={LocationIcon} alt='Location' className={classes.Location} />
  </div>
);

export default PortraitImage;