import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/herbs?search=${query}`);
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search herbs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-zinc-800 text-white px-4 py-1 rounded-lg outline-none"
      />
    </form>
  );
}
