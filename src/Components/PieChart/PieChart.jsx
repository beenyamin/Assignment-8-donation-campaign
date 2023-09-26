// import { LineChart, Line } from 'recharts';
import React from 'react';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';

const PieChart = () => {


    const data = [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ];
      
    return (
        <div>
            <PieChart
            
            series={[
                {
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30 },
                },
              ]}
              sx={{
                [`& .${pieArcClasses.faded}`]: {
                  fill: 'gray',
                },
              }}
              height={200}></PieChart>
            
        </div>
    );
};

export default PieChart;