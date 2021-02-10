import React from 'react';

import classes from './Header.module.scss';

import Logo from '../../UI/Logo/Logo';

const sections = [
  'About us',
  'Find Place',
  'City Map',
  'Contact'
];

const Header = () => (
  <header className={classes.Header}>
    <Logo style={{ marginRight: 'auto' }}/>
    
    <ul className={classes.Sections}>
      {
        sections.map(section => (
          <li key={section} className={classes.Section}>{section}</li>
        ))
      }
    </ul>
  </header>
);

export default Header;