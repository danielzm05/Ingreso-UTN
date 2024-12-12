import { Search } from "lucide-react";

export function SearchBar({ placeholder }) {
  return (
    <div className="w-full p-3 flex items-center gap-1 border border-slate-800 rounded-xl">
      <Search size={18} />
      <input type="text" placeholder={placeholder} className="w-full bg-transparent outline-none" />
    </div>
  );
}
