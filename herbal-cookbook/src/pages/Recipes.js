import { useState } from "react";
import recipes from "../data/recipesData";

export default function Recipes({ searchQuery = "" }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // 🔍 SEARCH FILTER
  const filteredRecipes = recipes.filter((r) => {
    const q = searchQuery.toLowerCase();

    return (
      r.name.toLowerCase().includes(q) ||
      r.uses?.toLowerCase().includes(q) ||
      r.ingredients?.some((ing) =>
        ing.toLowerCase().includes(q)
      )
    );
  });

  return (
    <div className="pt-24 px-6 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">🍵 Herbal Recipes</h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        {filteredRecipes.map((r) => (
          <div
            key={r.name}
            onClick={() => setSelectedRecipe(r)}
            className="w-[400px] h-[300px] bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img
              src={r.image}
              alt={r.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{r.name}</h2>
              <p className="text-sm text-zinc-400">{r.uses}</p>
            </div>
          </div>
        ))}
      </div>

      {/* NO RESULTS */}
      {filteredRecipes.length === 0 && (
        <p className="text-center text-zinc-400 mt-10">
          No recipes found 🌿
        </p>
      )}

      {/* MODAL */}
      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="w-[90%] md:w-[850px] h-[600px] rounded-xl p-6 text-white relative"
            style={{
              backgroundImage: `url(${selectedRecipe.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

            <div className="relative z-10 h-full overflow-y-auto pr-4">
              <button
                className="absolute top-1 right-2 text-xl"
                onClick={() => setSelectedRecipe(null)}
              >
                ❌
              </button>

              <h2 className="text-4xl font-bold mb-2">
                {selectedRecipe.name}
              </h2>

              <p className="text-2xl text-zinc-300 mb-4">
                <span className="font-bold">For:</span> {selectedRecipe.uses}
              </p>

              {selectedRecipe.ingredients && (
                <>
                  <h3 className="text-2xl font-bold">Ingredients</h3>
                  <ul className="list-disc list-inside text-xl space-y-2 mb-4">
                    {selectedRecipe.ingredients.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </>
              )}

              {selectedRecipe.recipe && (
                <>
                  <h3 className="text-2xl font-bold">Recipe Steps</h3>
                  <ol className="list-decimal list-inside text-xl space-y-2">
                    {selectedRecipe.recipe.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
