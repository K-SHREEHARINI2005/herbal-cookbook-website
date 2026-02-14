import { Leaf, Soup, Heart } from "lucide-react";

export default function BottomNav({ page, setPage }) {
  return (
    <nav className="fixed bottom-0 w-full bg-zinc-900 flex justify-around py-3">
      <button onClick={() => setPage("herbs")}>
        <Leaf className={page === "herbs" ? "text-green-500" : "text-zinc-400"} />
      </button>

      <button onClick={() => setPage("recipes")}>
        <Soup className={page === "recipes" ? "text-green-500" : "text-zinc-400"} />
      </button>

      <button onClick={() => setPage("wellness")}>
        <Heart className={page === "wellness" ? "text-green-500" : "text-zinc-400"} />
      </button>
    </nav>
  );
}
