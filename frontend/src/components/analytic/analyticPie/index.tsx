import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import "./styles.css";
import React, { useEffect, useRef } from "react";
import { PieChart } from '@mui/x-charts';

const AnalyticComponentPie = () => {
  return (
    <Box className='AnalyticComponentBlockPie'>
        <Breadcrumbs aria-label="breadcrumb">
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/lines">Lines</Link>
            <Link className="linkGroup" underline="hover" color="inherit" href="/analytic/bars">Bars</Link>
            <Typography color="text.primary">Pie</Typography>
        </Breadcrumbs>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          sx={{marginTop: 8, marginLeft: 5}}
          width={600}
          height={400}
        />
    </Box>
  );
};

export default AnalyticComponentPie;
