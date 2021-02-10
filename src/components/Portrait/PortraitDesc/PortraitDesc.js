import React from 'react';

import classes from './PortraitDesc.module.scss';

import SearchBox from './SearchBox/SearchBox';

const PortraitDesc = () => (
  <div className={classes.PortraitDesc}>
    <div className={classes.PortraitTitle}>Search Your Destination</div>
    
    <div className={classes.PortraitText}>
      Then select departure date, how long the trip will be and how many destinations to include. Users can also select if they want to look at cities in Europe, the European Union or just the Schengen Zone.
    </div>
    
    <SearchBox />
  </div>
);

export default PortraitDesc;