import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import "./styles.css";
import React, { useEffect, useRef } from "react";
import { BarChart } from '@mui/x-charts';

const AnalyticComponentBars = () => {
  return (
    <Box className='AnalyticComponentBlockBars'>
        <Breadcrumbs aria-label="breadcrumb">
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/lines">Lines</Link>
            <Typography color="text.primary">Bars</Typography>
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/pie">Pie</Link>
        </Breadcrumbs>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
          series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
          sx={{marginTop: 6}}
          width={700}
          height={500}
        />
    </Box>
  );
};

export default AnalyticComponentBars;
