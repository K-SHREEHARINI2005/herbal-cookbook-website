import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-green-500 font-bold text-xl">
        🌿 HerbalFlix
      </Link>

      <SearchBar />
    </div>
  );
}
