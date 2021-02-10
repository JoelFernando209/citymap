import React from 'react';

import LogoImg from '../../../assets/logo-citymap.png';

import classes from './Logo.module.scss';

const Logo = ({ style }) => (
  <div className={classes.Logo} style={style}>
    <img src={LogoImg} alt='Logo' />
    
    <span className={classes.LogoName}>CityMap</span>
  </div>
);

export default Logo;