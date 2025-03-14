import { Search } from "lucide-react";
import { useState, memo } from "react";


function SearchBar({ onSearch, placeholder }) {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div
      className={`w-full px-3 flex items-center gap-1 rounded-xl bg-background2 h-12 ${
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

export default memo(SearchBar);