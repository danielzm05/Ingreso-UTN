import { ExerciseCard } from "./ExerciseCard";
import { Marquee } from "./marquee";

export function MarqueeVertical({ exercises }) {
  const firstRow = exercises?.slice(0, 5);
  const secondRow = exercises?.slice(-5);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:60s] [&_article]:max-w-[350px] [&_article]:border [&_article]:border-border1 ">
        {firstRow?.map((ex) => (
          <ExerciseCard
            key={ex?.id_ejercicio}
            id={ex?.id_ejercicio}
            examen={ex.Examen.Examen_Categoria.categoria + " " + ex.Examen.mes}
            fecha={ex.Examen.fecha}
            {...ex}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:60s] [&_article]:max-w-[350px] [&_article]:border [&_article]:border-border1">
        {secondRow?.map((ex) => (
          <ExerciseCard
            key={ex?.id_ejercicio}
            id={ex?.id_ejercicio}
            examen={ex.Examen.Examen_Categoria.categoria + " " + ex.Examen.mes}
            fecha={ex.Examen.fecha}
            {...ex}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-transparent"></div>
    </div>
  );
}
