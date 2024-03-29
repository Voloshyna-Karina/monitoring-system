import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import './styles.css';

const TopBarComponent = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const getCurrentDate = () => {
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date().toLocaleDateString('uk-UA', options);
      setCurrentDate(formattedDate);
    };

    getCurrentDate();
  }, []);

  return (
    <Box className='TopBarBlock'>
      <Box className='TopBarContainer'>
        <Box>
            <Grid className='HeaderText'>Welcome to PROFITPILOT</Grid>
            <p className='DateText'>{currentDate}</p>
        </Box>
      </Box>
      <Box className='line'/>
    </Box>
  );
};

export default TopBarComponent;
