export default function HorizontalRow({ title, data }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-[220px] bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-32 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-zinc-400">{item.uses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
