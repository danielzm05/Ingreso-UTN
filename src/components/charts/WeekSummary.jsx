import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function WeekSummary({ exercises }) {
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.push({
      date: date.toISOString().split("T")[0],
      count: 0,
    });
  }

  days.forEach((d) => {
    exercises.forEach((e) => {
      if (e.fecha.split("T")[0] === d.date) {
        d.count += 1;
      }
    });
  });

  const data = {
    labels: days.map((d) => d.date.slice(8, 10) + "/" + d.date.slice(5, 7)),
    datasets: [
      {
        label: "Ejercicios",
        data: days.map((d) => d.count),
        backgroundColor: "#3CDC7E",
        borderRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#141E22",
        displayColors: false,
        caretSize: 0,
        bodyColor: "#6b7280",
        padding: 10,
        titleFont: {
          size: 14,
          weight: 600,
        },
        bodyFont: {
          size: 14,
          color: "#6b7280",
        },
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
            family: "Inter, system-ui",
            weight: "600",
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          precision: 0,
          font: {
            size: 14,
            family: "Inter, system-ui",
            weight: "600",
          },
        },
      },
    },
  };
  return <Bar options={options} data={data} />;
}
