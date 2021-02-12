import React, { useRef } from 'react';

import FooterLeft from '../../assets/footerLeft.svg';
import FooterRight from '../../assets/footerRight.svg';

import Logo from '../UI/Logo/Logo';

import classes from './Footer.module.scss';

const Footer = ({ currentSection, changeRefElement }) => {
  const footerRef = useRef(null);
  
  if(currentSection === 'contact') {
    changeRefElement(footerRef)
  }
  
  return (
    <footer className={classes.Footer} ref={footerRef}>
      <img src={FooterLeft} alt='' className={classes.FooterLeft} />
      
      <div className={classes.Content}>
        <Logo styleText={{ color: 'black' }} style={{ marginBottom: '7rem', alignSelf: 'flex-start' }} />
        
        <div className={classes.TextFooter}>
          <span>
            Then select departure date, how long the trip will be and how many destinations to include. Users can also select if they want to look at cities in Europe, the European Union or just the Schengen Zone.
          </span>
          
          <ul className={classes.ListFooter}>
            <li>About us</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Map</li>
          </ul>
          
          <ul className={classes.ListFooter}>
            <li>Blog</li>
            <li>Keywords</li>
            <li>Email</li>
            <li>Notification</li>
            <li>Settings</li>
            <li>Update</li>
          </ul>
        </div>
        
        <div className={classes.Author}>@2021 Joel Fernando DT (<span className={classes.AuthorEmail}>joeldomingueztapia@gmail.com</span>)</div>
      </div>
      
      <img src={FooterRight} alt='' className={classes.FooterRight} />
    </footer>
  )
};

export default Footer;