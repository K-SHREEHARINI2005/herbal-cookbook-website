import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Herbs from "./pages/Herbs";
import Recipes from "./pages/Recipes";
import Liked from "./pages/Liked";
import BottomTabs from "./components/BottomTabs";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>

      {/* 🔍 GLOBAL SEARCH BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black p-4">
        <input
          type="text"
          placeholder="Search herbs, ingredients, diseases..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 mx-auto block p-3 rounded-lg bg-zinc-900 text-white outline-none"
        />
      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/herbs" element={<Herbs searchQuery={searchQuery} />} />
        <Route path="/recipes" element={<Recipes searchQuery={searchQuery} />} />
        <Route path="/liked" element={<Liked searchQuery={searchQuery} />} />
      </Routes>

      <BottomTabs />
    </BrowserRouter>
  );
}

export default App;
