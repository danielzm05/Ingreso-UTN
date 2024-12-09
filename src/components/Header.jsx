/* import { IconMath, IconFileText } from "@tabler/icons-react"; */
export function Header() {
  return (
    <header className="p-5 flex border border-yellow-500">
      <h1 className="text-lg font-semibold text-nowrap">ⵥ INGRESO UTN</h1>
      <ul className="w-full border border-yellow-400 flex justify-center items-center gap-3 text-gray-500 font-medium">
        <li>
          {/* <IconMath /> */}
          Ejercicios
        </li>
        <li>
          {/* <IconFileText /> */}
          Exámenes
        </li>
      </ul>
    </header>
  );
}
