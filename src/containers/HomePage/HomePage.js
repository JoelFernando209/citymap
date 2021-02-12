import React, { useState, useEffect } from 'react';

import Portrait from '../../components/Portrait/Portrait';
import Presentation from '../../components/Presentation/Presentation';
import Progress from '../../components/Progress/Progress';
import AppPresentation from '../../components/AppPresentation/AppPresentation';
import Footer from '../../components/Footer/Footer';

import { scrollEventTo } from '../../utils/style.utils';

const HomePage = () => {
  const [ currentSection, setCurrentSection ] = useState('');
  const [ refElement, setRefElement ] = useState(null);
  
  const changeSection = value => {
    setCurrentSection(value);
  };
  
  useEffect(() => {
    if(refElement) {
      scrollEventTo(refElement.current)
    }
    
    setCurrentSection('');
    setRefElement(null);
  }, [refElement]);
  
  return (
    <>
      <Portrait changeSection={changeSection} />
      <Presentation />
      <Progress currentSection={currentSection} changeRefElement={setRefElement} />
      <AppPresentation currentSection={currentSection} changeRefElement={setRefElement} />
      <Footer currentSection={currentSection} changeRefElement={setRefElement} />
    </>
  )
};

export default HomePage;