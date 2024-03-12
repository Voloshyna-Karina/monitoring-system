import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import "./styles.css";
import React, { useEffect, useRef } from "react";
import { LineChart } from '@mui/x-charts';

const AnalyticComponentLines = () => {
  return (
    <Box className='AnalyticComponentBlockLines'>
        <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">Lines</Typography>
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/bars">Bars</Link>
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/pie">Pie</Link>
        </Breadcrumbs>
        <LineChart 
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5],}, ]}
          sx={{marginTop: 2}}
          width={700}
          height={500}
        />
    </Box>
  );
};

export default AnalyticComponentLines;
