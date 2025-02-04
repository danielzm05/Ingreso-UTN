import { ExerciseCard } from "./ExerciseCard";
import { Marquee } from "./marquee";

export function MarqueeVertical({ exercises }) {
  const firstRow = exercises?.slice(0, 5);
  const secondRow = exercises?.slice(-5);

  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow?.map((ex) => (
          <ExerciseCard key={ex?.id_ejercicio} id={ex?.id_ejercicio} {...ex} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow?.map((ex) => (
          <ExerciseCard key={ex?.id_ejercicio} id={ex?.id_ejercicio} {...ex} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background3"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background2"></div>
    </div>
  );
}
