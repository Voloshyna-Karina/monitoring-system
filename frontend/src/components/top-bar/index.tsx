import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

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
    <Box display='flex' justifyContent='space-between' px="40px" py="42px" alignContent='center'>
        <Box>
            <Grid sx={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: 700}}>Welcome Karina</Grid>
            <p style={{marginTop: '5px', marginBottom: '0px', fontFamily: 'Inter', fontSize: '14px'}}>{currentDate}</p>
        </Box>
    </Box>
  );
};

export default TopBarComponent;
