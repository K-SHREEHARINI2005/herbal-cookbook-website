import { useRef } from "react";
import tulsi from "../assests/healthy2.jpg";
import tulsi1 from "../assests/tulsi1.jpg";
import neem from "../assests/neem.jpg"
import aloe from "../assests/aloe.jpg"
import mint from "../assests/mint1.jpg"
import ginger from "../assests/ginger.jpeg"
import tea from "../assests/tulsi_tea.jfif"
import aloe_juice from "../assests/aloejuice.jfif" 
import milk from "../assests/milk.jfif" 
import detox from "../assests/mint_Water.jfif" 

export default function Home() {
  const scrollRef = useRef(null);

  /* 🔹 NEW REF FOR RECIPES */
  const recipeScrollRef = useRef(null);

  const herbs = [
    {
      name: "Tulsi",
      image:
        tulsi1,
    },
    {
      name: "Neem",
      image:neem,
    },
    {
      name: "Aloe Vera",
      image:
        aloe,
    },
    {
      name: "Ginger",
      image:
        ginger,
    },
    {
      name: "Mint",
      image:
        mint,
    },
    
  ];

  /* 🔹 NEW: POPULAR RECIPES DATA */
  const recipes = [
    {
      name: "Tulsi Tea",
      image:
        tea,
    },
    {
      name: "Aloe Vera Juice",
      image:
        aloe_juice,
    },
    {
      name: "Turmeric Milk",
      image:
        milk,
    },
    {
      name: "Mint Detox Water",
      image:
        detox,
    },
    {
      name: "Ginger Lemon Tea",
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  /* 🔹 NEW SCROLL FUNCTIONS FOR RECIPES */
  const recipeScrollLeft = () => {
    recipeScrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const recipeScrollRight = () => {
    recipeScrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* HERO SECTION */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${tulsi})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <h1 className="absolute bottom-8 left-6 text-4xl font-extrabold">
          Herbify your EVERYDAY🌿
        </h1>
      </div>

      {/* CONTENT */}
      <div className="flex-grow px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Popular Herbal Plants
        </h2>

        {/* IMAGE ROW WITH OVERLAY BUTTONS */}
        <div className="relative group">
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 hover:bg-black/80 text-white
                       p-3 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
          >
            ◀
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 hover:bg-black/80 text-white
                       p-3 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
          >
            ▶
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
          >
            {herbs.map((herb) => (
              <div
                key={herb.name}
                className="min-w-[300px] h-[300px] rounded-2xl overflow-hidden
                           relative transition transform hover:scale-105"
              >
                <img
                  src={herb.image}
                  alt={herb.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold">
                  {herb.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ================= NEW SECTION START ================= */}

        <h2 className="text-2xl font-bold mt-12 mb-4">
          Popular Herbal Recipes
        </h2>

        <div className="relative group">
          <button
            onClick={recipeScrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 hover:bg-black/80 text-white
                       p-3 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
          >
            ◀
          </button>

          <button
            onClick={recipeScrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       bg-black/60 hover:bg-black/80 text-white
                       p-3 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
          >
            ▶
          </button>

          <div
            ref={recipeScrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
          >
            {recipes.map((recipe) => (
              <div
                key={recipe.name}
                className="min-w-[300px] h-[300px] rounded-2xl overflow-hidden
                           relative transition transform hover:scale-105"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold">
                  {recipe.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ================= NEW SECTION END ================= */}

      </div>

      {/* FOOTER (UNCHANGED) */}
      {/* Your footer code remains exactly the same */}
      <footer className="mt-auto border-t border-emerald-900/40 bg-gradient-to-r from-black via-emerald-950 to-black px-6 py-10 pb-24"> <h2 className="text-xl font-semibold text-emerald-400 mb-6"> Contact </h2> <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-300"> {/* YOU */} <div> <p className="font-semibold text-white mb-2"> Abirami K </p> <p>📧 abikandas03_bit27@mepcoeng.ac.in</p> <p>MEPCO Schlenk Engineering College</p> <p>Sivakasi, Tamil Nadu</p> </div> {/* FRIEND 1 */} <div> <p className="font-semibold text-white mb-2"> Niranjana Devi S </p> <p>📧 niranjanadevis_bit27@mepcoeng.ac.in</p> <p>MEPCO Schlenk Engineering College</p> <p>Sivakasi</p> </div> {/* FRIEND 2 */} <div> <p className="font-semibold text-white mb-2"> Shree Harini K </p> <p>📧 anitha.karhikeyan1_bit27@mepcoeng.ac.in</p> <p>MEPCO Schlenk Engineering College</p> <p>Sivakasi</p> </div> </div> </footer>
    </div>
  );
}
