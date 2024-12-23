import { Link } from "react-router";

export function TestCard({ id, fecha, nombre, descripcion, tema }) {
  return (
    <Link to={`/Examenes/${id}`}>
      <article className="max-h-40 flex flex-col items-start p-5 gap-1 bg-card rounded-xl cursor-pointer hover:bg-hover transition duration-300 ease-in-out">
        <h1 className="text-lg text-start font-semibold">
          {fecha} {nombre}
        </h1>
        <p className="text-gray-500 font-semibold">
          {tema ? `Tema: ${tema}` : ""} {descripcion}
        </p>
      </article>
    </Link>
  );
}
