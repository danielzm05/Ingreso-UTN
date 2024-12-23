import { Search } from "lucide-react";
import { useState } from "react";
export function SearchBar({ onSearch, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div
      className={`w-full p-3 flex items-center gap-1 rounded-xl bg-background2 ${
        isFocused ? "border-2 border-primary" : ""
      } transition duration-100 ease-in`}
    >
      <Search size={18} />
      <input
        type="text"
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}
