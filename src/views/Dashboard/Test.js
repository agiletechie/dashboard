// src/LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const mockData = {
        "salesForecastData": [
            {"date": "2022-01-01", "sales": 20000},
            {"date": "2022-02-01", "sales": 45000},
            {"date": "2022-03-01", "sales": 22000},
            {"date": "2022-04-01", "sales": 30000},
            {"date": "2022-05-01", "sales": 15000},
            {"date": "2022-06-01", "sales": 20000},
            {"date": "2022-07-01", "sales": 40000},
            {"date": "2022-08-01", "sales": 50000},
            {"date": "2022-09-01", "sales": 30000},
            {"date": "2022-10-01", "sales": 25000},
            {"date": "2022-11-01", "sales": 60000},
            {"date": "2022-12-01", "sales": 10000},
            {"date": "2023-01-01", "sales": 15000},
            {"date": "2023-02-01", "sales": 30000},
            {"date": "2023-03-01", "sales": 45000},
            {"date": "2023-04-01", "sales": 10000},
            {"date": "2023-05-01", "sales": 20000},
            {"date": "2023-06-01", "sales": 25000},
            {"date": "2023-07-01", "sales": 50000},
            {"date": "2023-08-01", "sales": 60000},
            {"date": "2023-09-01", "sales": 30000},
            {"date": "2023-10-01", "sales": 25000},
            {"date": "2023-11-01", "sales": 55000},
            {"date": "2023-12-01", "sales": 15000},
            {"date": "2024-01-01", "sales": 20000},
            {"date": "2024-02-01", "sales": 40000},
            {"date": "2024-03-01", "sales": 50000},
            {"date": "2024-04-01", "sales": 10000},
            {"date": "2024-05-01", "sales": 20000},
            {"date": "2024-06-01", "sales": 30000}
        ]
    }

    const data = {
        labels: mockData.salesForecastData.map(item => new Date(item.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Sales in $ (Thousands)',
                data: mockData.salesForecastData.map(item => item.sales),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales in $ (Thousands)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Sales Forecast'
            }
        }
    };

    return <Line data={data} options={options} />;
}

export default LineChart;
