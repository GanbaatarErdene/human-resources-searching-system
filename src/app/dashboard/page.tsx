"use client"

import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  "labels":[
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July"
  ],
  "datasets":[
     {
        "label":"Dataset 1",
        "data":[
           2,
           8,
           3.9,
           0,
           5.3,
           7,
           1
        ],
        "backgroundColor":"rgba(255, 99, 132, 0.5)"
     },
     {
        "label":"Dataset 2",
        "data":[
           1,
           8,
           4,
           9,
           1,
           0,
           6
        ],
        "backgroundColor":"rgba(53, 162, 235, 0.5)"
     }
  ]
};


export default function Dashboard() {
  console.log(data);
  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
}
