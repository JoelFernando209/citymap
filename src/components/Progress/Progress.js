import React, { useEffect, useRef } from 'react';

import { windowScrollEvent } from '../../utils/style.utils';

import classes from './Progress.module.scss';

import ProgressCard from './ProgressCard/ProgressCard';

import SearchIcon from '../../assets/search-icon.svg';
import PhoneIcon from '../../assets/phone-icon.svg';
import YachtIcon from '../../assets/yacht-icon.svg';

const Progress = ({ currentSection, changeRefElement }) => {
  const progressRef = useRef(null);
  
  const joinWithSnakeProgress = selector => [classes.SnakeProgress, selector].join(' ');
  
  useEffect(() => {
    window.addEventListener('scroll', windowScrollEvent, false);
    
    return () => {
      window.removeEventListener('scroll', windowScrollEvent, false);
    };
  })
  
  if(currentSection === 'posibilities') {
    changeRefElement(progressRef);
  }
  
  return (
    <div className={classes.Progress} ref={progressRef}>
      <div className={[classes.SideContent, classes.SideContentLeft].join(' ')}>
        <ProgressCard
          icon={SearchIcon}
          direction='row'
          distanceKm='2.0'
          title='BRAC ATM Booth'
          subtitle='Connect with CityMap'
          index='01'
        >
          According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.
        </ProgressCard>
        
        <ProgressCard
          icon={YachtIcon}
          direction='row'
          distanceKm='0.5'
          title='Nearest yacht store'
          subtitle='Connect with CityMap'
          index='03'
        >
          According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.
        </ProgressCard>
      </div>
    
      <div className={classes.SnakeProgress}></div>
      
      <div className={[classes.SideContent, classes.SideContentRight].join(' ')}>
        <ProgressCard
          icon={PhoneIcon}
          direction='reverse'
          distanceKm='5.0'
          title='City Govt Hospital'
          subtitle='Connect with CityMap'
          index='02'
        >
          According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.
        </ProgressCard>
      </div>
    </div>
  )
};

export default Progress;