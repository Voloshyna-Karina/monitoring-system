import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import "./styles.css";
import React, { useEffect, useRef } from "react";

const AnalyticComponent = () => {
  return (
    <Box className='AnalyticComponentBlock'>
        <Breadcrumbs sx={{marginBottom: 3}} aria-label="breadcrumb">
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/lines">Lines</Link>
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/bars">Bars</Link>
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/pie">Pie</Link>
        </Breadcrumbs>
        <Typography 
          variant="body1" 
          component="span"
          sx={{color: '#757575'}}
        >Натисніть на одну із сторінок, щоб побачити графік.</Typography>
    </Box>
  );
};

export default AnalyticComponent;
