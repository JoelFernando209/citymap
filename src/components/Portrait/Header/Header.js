import React from 'react';

import classes from './Header.module.scss';

import Logo from '../../UI/Logo/Logo';

import { scrollEventTo } from '../../../utils/style.utils';

const Header = ({ changeSection }) => {
  const sections = [
    { name: 'Posibilities', section: 'posibilities' },
    { name: 'City Map', section: 'city map' },
    { name: 'Contact', section: 'contact' }
  ];
  
  return (
    <header className={classes.Header}>
      <Logo style={{ marginRight: 'auto' }}/>
      
      <ul className={classes.Sections}>
        {
          sections.map(section => (
            <li
              key={section.name}
              className={classes.Section}
              onClick={changeSection.bind(null, section.section)}
            >
              {section.name}
            </li>
          ))
        }
      </ul>
    </header>
  )
};

export default Header;