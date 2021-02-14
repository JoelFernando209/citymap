import React from 'react';

import classes from './ProgressCard.module.scss';

import { MdLocationOn } from 'react-icons/md';

const ProgressCard = ({ icon, direction, distanceKm, title, subtitle, children, index }) => {
  let style = {
    flexDirection: 'row'
  }
  
  let indexStyle = {};
  
  if(direction === 'reverse') {
    style = {
      flexDirection: 'row-reverse'
    }
    
    indexStyle = {
      right: '50%',
      left: '0'
    };
  }
  
  return (
    <div className={classes.ProgressCard} style={style}>
      <div className={classes.Index} style={indexStyle}>{index}</div>
    
      <img src={icon} />
      
      <div className={classes.Content}>
        <div className={classes.Ubication}>
          <MdLocationOn color='#13F1FC' />
          
          {distanceKm}km
        </div>
        
        <div className={classes.Title}>{title}</div>
        <div className={classes.Subtitle}>{subtitle}</div>
        
        <div className={classes.Desc}>
          {children}
        </div>
      </div>
    </div>
  )
};

export default ProgressCard;