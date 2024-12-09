export function ExerciseCard() {
  return (
    <article className="max-h-40 flex p-5 gap-3 border border-slate-800 rounded-xl cursor-pointer hover:bg-slate-900 transition duration-300 ease-in-out">
      <img
        className="rounded aspect-square"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR2pvxzakQiWYXx59UdmIwGRjgCbPIrbYgerFFd4SEro6SisPR7UOwx3WAxeSKfUmFMw&usqp=CAU"
        alt="image"
      />
      <section className="flex flex-col gap-2 items-start justify-start">
        <header>
          <p className="text-gray-500 font-semibold">Final Marzo 2024</p>
        </header>
        <h1 className="text-lg text-start font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, ea! Minus esse blanditiis quia nam inventore tempore quod, eum
          mollitiatotam molestiae quae nobis sequi similique ab reiciendis excepturi iusto!
        </h1>
        <div className="px-2 py-1 rounded-2xl bg-red-800 text-xs">
          <div>📐 Trigonometria</div>
        </div>
      </section>
    </article>
  );
}
