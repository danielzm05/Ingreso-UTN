import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js";
import { Bold } from "lucide-react";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CategoryDoughnut({ exercises }) {
  const temas = [...new Set(exercises?.flatMap((e) => e.Ejercicio.Ejercicio_Tema.map((tema) => tema.Tema.nombre)))];

  const cantidad = temas.map((tema) => exercises?.filter((e) => e.Ejercicio.Ejercicio_Tema.some((t) => t.Tema.nombre === tema)).length);

  const data = {
    labels: temas,
    datasets: [
      {
        label: "Ejercicios Realizados",
        data: cantidad,
        backgroundColor: ["#3CDC7E", "#FFED3C", "#FE3D76", "#C6F054", "#8E5DED", "#4EAEE3"],
        borderWidth: 0,
        borderRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "right",
        labels: {
          font: {
            size: 14,
            family: "Inter, system-ui",
            weight: "600",
          },
        },
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
        },
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
    cutout: 70,
  };

  return <Doughnut data={data} options={options} />;
}
