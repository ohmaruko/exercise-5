
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10, 5, 1, 7, 2, 14, 15],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)',
                },
                {
                    label: 'Data 2',
                    data: [15, 10, 2, 2, 9, 11, 5],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(23, 21, 235, 0.4)',
                },
                {
                    label: 'Data 3',
                    data: [7, 2, 5, 9, 10, 2, 4],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(153, 162, 150, 0.4)',
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
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
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}} />
            </div>
        </>
    )
}