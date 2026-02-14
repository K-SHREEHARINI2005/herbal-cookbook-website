import herbs from "../data/herbsData";

export default function Herbs({ searchQuery = "" }) {

  const filteredHerbs = herbs.filter((h) => {
    const q = searchQuery.toLowerCase();

    return (
      h.name.toLowerCase().includes(q) ||
      h.benefits.toLowerCase().includes(q) ||
      h.uses?.some((u) => u.toLowerCase().includes(q))
    );
  });

  return (
    <div className="pt-24 px-6 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">🌿 Herbs & Benefits</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {filteredHerbs.map((h) => (
          <div
            key={h.name}
            className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={h.image}
              alt={h.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{h.name}</h2>
              <p className="text-sm text-zinc-400">{h.benefits}</p>
            </div>
          </div>
        ))}
      </div>

      {/* NO RESULTS MESSAGE */}
      {filteredHerbs.length === 0 && (
        <p className="text-center text-zinc-400 mt-10">
          No herbs found 🌱
        </p>
      )}
    </div>
  );
}
