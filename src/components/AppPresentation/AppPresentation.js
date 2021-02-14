import React, { useRef } from 'react';
import Button from 'antd/lib/button';

import { AiFillAndroid, AiFillApple } from 'react-icons/ai';

import classes from './AppPresentation.module.scss';

import AppUI from '../../assets/app-ui.png';

const AppPresentation = ({ currentSection, changeRefElement }) => {
  const appRef = useRef(null);
  
  const buttonsStyle = {
    textTransform: 'uppercase',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'space-between',
  }
  
  if(currentSection === 'city map') {
    changeRefElement(appRef)
  }
  
  return (
    <div className={classes.AppPresentation} ref={appRef}>
      <img src={AppUI} alt='UI App' />
      
      <div className={classes.AppText}>
        <div className={classes.Title}>CityMap App</div>
        
        <div className={classes.Desc}>
          According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder.
        </div>
        
        <div className={classes.DownloadButtons}>
          <Button shape="round" icon={<AiFillAndroid />} size='large' style={buttonsStyle}>
            On Android
          </Button>
          
          <Button shape="round" icon={<AiFillApple />} size='large' style={buttonsStyle}>
            On Apple
          </Button>
        </div>
      </div>
    </div>
  )
};

export default AppPresentation;