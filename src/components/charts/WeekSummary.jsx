import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function WeekSummary({ exercises }) {
  const fechas = exercises.map((e) => e.fecha.slice(5, 10)).sort((a, b) => new Date(a) - new Date(b));
  const fechasUnicas = [...new Set(fechas)];

  const conteo = fechas.reduce((acc, fecha) => {
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: fechasUnicas.slice(-7),
    datasets: [
      {
        label: "Ejercicios",
        data: Object.values(conteo).slice(-7),
        backgroundColor: "#8D5DE7",
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
