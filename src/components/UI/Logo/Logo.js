import React from 'react';

import LogoImg from '../../../assets/logo-citymap.png';

import classes from './Logo.module.scss';

const Logo = ({ style, styleText, className = '' }) => (
  <div className={[classes.Logo, className].join(' ')} style={style}>
    <img src={LogoImg} alt='Logo' />
    
    <span className={classes.LogoName} style={styleText}>CityMap</span>
  </div>
);

export default Logo;