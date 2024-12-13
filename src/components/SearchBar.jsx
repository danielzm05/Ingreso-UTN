import { Search } from "lucide-react";
import { useState } from "react";
export function SearchBar({ onSearch, placeholder }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="w-full p-3 flex items-center gap-1 border border-slate-800 rounded-xl">
      <Search size={18} />
      <input type="text" onChange={handleInputChange} placeholder={placeholder} className="w-full bg-transparent outline-none" />
    </div>
  );
}
