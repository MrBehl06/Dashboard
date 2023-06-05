import React from 'react';
import { Bar , Line , Pie, Radar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { pieChartData , barChartData ,lineChartData ,radarChartData} from './data';
Chart.register(...registerables);

const Main = () => {

  return (
    <>
    <div className="container mx-auto mt-10 ">
      <h1 className="text-2xl font-bold mb-4 max-md:text-center ">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        <div>
          <h2 className="text-lg font-bold mb-2 max-md:text-center  ">Bar Chart</h2>
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 max-md:text-center ">Line Chart</h2>
          <Line
            data={lineChartData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 max-md:text-center  ">Pie Chart</h2>
          <Pie data={pieChartData} />
        </div>
        <div >
          <h2 className="text-lg font-bold mb-2 max-md:text-center ">Radar Chart</h2>
          <Radar data={radarChartData}
           
           />
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Main;
