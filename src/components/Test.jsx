export function TestCard({ fecha, nombre, descripcion, tema }) {
  return (
    <article className="max-h-40 flex flex-col items-start p-5 gap-2 border border-slate-800 rounded-xl cursor-pointer hover:bg-slate-900 transition duration-300 ease-in-out">
      <h1 className="text-lg text-start font-semibold">
        {fecha} {nombre}
      </h1>
      <p className="text-gray-500 font-semibold">
        {tema ? `Tema: ${tema}` : ""} {descripcion}
      </p>
    </article>
  );
}
