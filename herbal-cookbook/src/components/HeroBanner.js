export default function HeroBanner() {
  return (
    <div
      className="relative h-[45vh] mb-6 rounded-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-10 left-6 text-white max-w-md">
        <h1 className="text-4xl font-extrabold mb-2">
          Herbal Medicine
        </h1>
        <p className="text-zinc-300">
          Discover natural remedies, ancient herbs, and healing recipes
        </p>

        <button className="mt-4 px-6 py-2 bg-green-600 rounded-lg font-semibold hover:bg-green-700">
          Explore Herbs
        </button>
      </div>
    </div>
  );
}
