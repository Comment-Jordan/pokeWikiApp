
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


export default function GraficoStats({ data }){
  const chartData = {
    labels: ['HP', 'Ataque', 'Defensa', 'Ataque Especial', 'Defensa Especial', 'Velocidad'],
    datasets: [
      {
        label: "IV",
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return <Radar data={chartData} options={options} />;
};