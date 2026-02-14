import aloe_juice from "../assests/aloejuice.jfif" 
import tulsi1 from "../assests/tulsi1.jpg";
import milk from "../assests/milk.jfif" 
import detox from "../assests/mint_Water.jfif" 
import char from "../assests/char.jfif"
import tur_honey from "../assests/turmeric_honey.jpg"
import lemon from "../assests/lemon.jfif"
import pepper_mint from "../assests/peppermint.jfif"
import rosemary from "../assests/rosemary.jfif"


export const recipes = [
  {
    name: "Tulsi Tea",
    use: "Cold & cough relief",
    image: tulsi1,
    ingredients: [
      "Fresh or dried tulsi leaves",
      "Water",
      "Honey or jaggery",
      "Lemon (optional)"
    ],
    recipe: [
      "Boil 1 cup of water",
      "Add fresh tulsi leaves",
      "Simmer for 5 minutes",
      "Strain into a cup",
      "Add honey or jaggery to taste",
      "Add lemon if desired and serve hot"
    ]
  },

  {
    name: "Golden Milk",
    use: "Immunity & joint pain",
    image: milk,
    ingredients: [
      "Milk",
      "Turmeric powder",
      "Black pepper",
      "Honey or jaggery"
    ],
    recipe: [
      "Heat 1 cup of milk in a pan",
      "Add turmeric powder",
      "Add a pinch of black pepper",
      "Simmer for 3–5 minutes",
      "Sweeten with honey or jaggery",
      "Drink warm before bedtime"
    ]
  },

  {
    name: "Aloe Vera Juice",
    use: "Digestion & skin hydration",
    image: aloe_juice,
    ingredients: [
      "Fresh aloe vera gel",
      "Water",
      "Lemon juice",
      "Honey (optional)"
    ],
    recipe: [
      "Extract fresh aloe vera gel",
      "Blend gel with water",
      "Add lemon juice",
      "Add honey if desired",
      "Mix well and drink fresh"
    ]
  },

  {
    name: "Ginger Lemon Tea",
    use: "Boosts immunity & relieves nausea",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    ingredients: [
      "Fresh ginger",
      "Water",
      "Lemon juice",
      "Honey"
    ],
    recipe: [
      "Boil water in a pan",
      "Add crushed ginger",
      "Simmer for 5 minutes",
      "Strain into a cup",
      "Add lemon juice and honey",
      "Serve warm"
    ]
  },

  {
    name: "Mint Detox Water",
    use: "Detox & improves metabolism",
    image: detox,
    ingredients: [
      "Fresh mint leaves",
      "Water",
      "Lemon slices"
    ],
    recipe: [
      "Wash mint leaves thoroughly",
      "Add mint and lemon slices to water",
      "Refrigerate for 2 hours",
      "Stir before drinking",
      "Consume chilled or at room temperature"
    ]
  },

  {
    name: "Chamomile Tea",
    use: "Sleep & relaxation",
    image: char,
    ingredients: [
      "Chamomile flowers or tea bag",
      "Hot water",
      "Honey (optional)"
    ],
    recipe: [
      "Boil water",
      "Add chamomile flowers or tea bag",
      "Steep for 5 minutes",
      "Strain into a cup",
      "Add honey if needed",
      "Drink before bedtime"
    ]
  },

  {
    name: "Turmeric Honey Drink",
    use: "Anti-inflammatory & immunity",
    image: tur_honey,
    ingredients: [
      "Turmeric powder",
      "Warm water",
      "Honey"
    ],
    recipe: [
      "Warm a cup of water",
      "Add turmeric powder",
      "Mix well",
      "Add honey",
      "Drink while warm"
    ]
  },

  {
    name: "Lemon Balm Tea",
    use: "Reduces stress & anxiety",
    image: lemon,
    ingredients: [
      "Lemon balm leaves",
      "Water",
      "Honey"
    ],
    recipe: [
      "Boil water",
      "Add lemon balm leaves",
      "Steep for 5 minutes",
      "Strain the tea",
      "Add honey and serve warm"
    ]
  },

  {
    name: "Peppermint Tea",
    use: "Aids digestion & relieves headaches",
    image: pepper_mint,
    ingredients: [
      "Peppermint leaves",
      "Hot water",
      "Honey (optional)"
    ],
    recipe: [
      "Boil water",
      "Add peppermint leaves",
      "Steep for 5 minutes",
      "Strain into a cup",
      "Add honey if desired",
      "Drink warm"
    ]
  },

  {
    name: "Rosemary Infused Water",
    use: "Improves memory & circulation",
    image: rosemary,
    ingredients: [
      "Fresh rosemary sprigs",
      "Water"
    ],
    recipe: [
      "Wash rosemary sprigs",
      "Add to a jug of water",
      "Let it infuse for 2–3 hours",
      "Stir well",
      "Drink throughout the day"
    ]
  }
];

export default recipes;
