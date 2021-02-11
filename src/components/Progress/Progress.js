import React, { useEffect } from 'react';

import { windowScrollEvent } from '../../utils/style.utils';

import classes from './Progress.module.scss';

const Progress = () => {
  useEffect(() => {
    window.addEventListener('scroll', windowScrollEvent, false);
    
    return () => {
      window.removeEventListener('scroll', windowScrollEvent, false);
    };
  })
  
  const joinWithSnakeProgress = selector => [classes.SnakeProgress, selector].join(' ');
  
  return (
    <div className={classes.Progress}>
      <div className={joinWithSnakeProgress(classes.SnakeProgressLeftVertical)}></div>
      <div className={joinWithSnakeProgress(classes.SnakeProgressHorizontal)}></div>
      <div className={joinWithSnakeProgress(classes.SnakeProgressRightVertical)}></div>
      <div className={joinWithSnakeProgress(classes.SnakeProgressLastHorizontal)}></div>
      <div className={joinWithSnakeProgress(classes.SnakeProgressRightLastVertical)}></div>
      <div className={joinWithSnakeProgress(classes.SnakeProgressShortHorizontal)}></div>
      <div className={joinWithSnakeProgress(classes.SnakeProgressCenterVertical)}></div>
      
      <div style={{ marginTop: '120rem' }}>test</div>
      
    </div>
  )
};

export default Progress;