import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: 'Number of Votes',
                    data: [10, 5, 1, 7, 2, 14],
                    borderColor: [
                        'rgb(10, 162, 235)',
                        'rgb(50, 162, 200)',
                        'rgb(100, 136, 133)',
                        'rgb(150, 162, 235)',
                        'rgb(200, 2, 235)',
                        'rgb(250, 162, 24)'
                    ],
                    backgroundColor: [
                        'rgba(10, 162, 235, 0.4)',
                        'rgba(50, 162, 200, 0.4)',
                        'rgba(100, 136, 133, 0.4)',
                        'rgba(150, 162, 235, 0.4)',
                        'rgba(200, 2, 235, 0.4)',
                        'rgba(250, 162, 24, 0.4)'
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    })

    return(
        <>
            <div>
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}