
import { Recipe, Category } from './types';

// Robust ID generation using crypto.randomUUID if available
export const generateId = (): string => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2, 9);
};

export const FAMILY_MEMBERS = ['Nan', 'Wade', 'Donetta', 'Adrienne', 'Cathy', 'Jean', 'Carolyn', 'Dorothy', 'Selma', 'Bernice', 'Gail', 'Laurie', 'Joanie', 'Bernadette', 'Wanda', 'Molly'];

export const OWNER_COLORS: Record<string, string> = {
  'Nan': '#b45309',      // Amber-700
  'Wade': '#0369a1',     // Sky-700
  'Donetta': '#be185d',  // Pink-700
  'Adrienne': '#7e22ce', // Purple-700
  'Cathy': '#15803d',    // Green-700
  'Jean': '#c2410c',     // Orange-700
  'Carolyn': '#0e7490',  // Cyan-700
  'Dorothy': '#334155',  // Slate-700
  'Selma': '#4338ca',    // Indigo-700
  'Bernice': '#4d7c0f',  // Lime-700
  'Gail': '#1d4ed8',     // Blue-700
  'Laurie': '#9d174d',   // Rose-800
  'Molly': '#b91c1c',    // Red-700
  'Wanda': '#0f766e',    // Teal-700
  'Bernadette': '#6b21a8', // Purple-800
  'Joanie': '#854d0e',   // Yellow-800
};

export const AVATAR_COLORS = [
  '#b91c1c', '#15803d', '#b45309', '#0369a1', '#334155', 
  '#4338ca', '#be185d', '#854d0e', '#0f766e', '#7e22ce',
];

export const getAvatarColor = (name: string, explicitColor?: string) => {
  if (explicitColor) return explicitColor;
  if (OWNER_COLORS[name]) return OWNER_COLORS[name];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const index = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
};

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: generateId(),
    title: "Ham & Potatoes Au Gratin",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1/4 cup chopped Onion",
      "1/4 cup chopped Green Pepper",
      "2 Tbsp Butter",
      "3 Tbsp Flour",
      "Dash Salt and Pepper",
      "1 cup Milk",
      "1 cup shredded Cheddar Cheese",
      "1/4 cup Mayonnaise",
      "3 cups cooked Potatoes",
      "2 cups cooked Ham"
    ],
    instructions: [
      "Sauté onion and green pepper in butter until tender.",
      "Stir in flour, salt, and pepper.",
      "Add milk all at once and bring to a boil, stirring constantly.",
      "Reduce heat. Add grated cheese and mayonnaise.",
      "Continue stirring until cheese melts.",
      "Add potatoes and ham and mix thoroughly into sauce.",
      "Bake in casserole dish at 350°F for 30 minutes."
    ],
    addedBy: "Nan",
    temp: "350°F",
    cookTime: "30 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "To Cook Cranberries",
    category: Category.SAUCES,
    ingredients: [
      "1 1/2 cups Sugar",
      "1 1/2 cups Water",
      "12 oz Cranberries",
      "Dash of Salt"
    ],
    instructions: [
      "Combine sugar and water in a saucepan.",
      "Stir to dissolve sugar. Bring to a boil.",
      "Add cranberries and salt.",
      "Cook cranberries in boiling syrup without stirring until skins pop (about 10 mins)."
    ],
    addedBy: "Nan",
    cookTime: "10 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chocolate Balls",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Margarine",
      "3 cups Coconut",
      "2 cups Icing Sugar",
      "1/4 cup Evaporated Milk",
      "6 oz Choc Chips (melted)",
      "2 Tbsp Paraffin Wax (melted)"
    ],
    instructions: [
      "Mix margarine, coconut, icing sugar, and milk together.",
      "Put in fridge for about 2 hours to set.",
      "Form into small balls.",
      "Dip in melted chocolate chips and wax mixture.",
      "Place on waxed paper and chill until set."
    ],
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Macaroni & Crab",
    category: Category.MAIN_DISHES,
    ingredients: [
      "Macaroni",
      "Butter",
      "Green & Red Peppers, chopped",
      "1 can Crab meat (drained)",
      "1 Tbsp Cheese Whiz",
      "1/4 cup Milk",
      "Miracle Whip"
    ],
    instructions: [
      "Cook macaroni and drain.",
      "Fry peppers in butter; add to macaroni.",
      "Add the crab meat.",
      "Melt cheese whiz with milk and add to crab mixture.",
      "Mix with a little Miracle Whip to reach desired creaminess."
    ],
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Whole Wheat Bread with Honey",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "3 cups Warm Water",
      "2 pkgs Active Yeast",
      "1/3 cup Honey (for yeast)",
      "5 cups White Flour",
      "3 Tbsp Butter",
      "1/3 cup Honey (for dough)",
      "1 Tbsp Salt",
      "3 1/2 cups Whole Wheat Flour",
      "2 Tbsp melted Butter (for top)"
    ],
    instructions: [
      "In a large bowl, mix warm water, yeast, and 1/3 cup honey.",
      "Add 5 cups white flour and combine. Let stand 30 minutes until bubbly.",
      "Mix in 3 Tbsp melted butter, remaining 1/3 cup honey, and salt.",
      "Stir in 2 cups whole wheat flour.",
      "Knead on floured board, adding remaining flour until not sticky.",
      "Place in greased bowl, cover with towel. Let rise until doubled in bulk.",
      "Punch down and place in loaves. Bake until golden."
    ],
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Bacardi Rum Cake",
    category: Category.DESSERTS,
    ingredients: [
      "1 pkg (18 1/2 oz) Yellow Cake Mix",
      "1 pkg (3 3/4 oz) Vanilla Instant Pudding",
      "4 Eggs",
      "1/2 cup Cold Water",
      "1/2 cup Vegetable Oil",
      "1/2 cup Bacardi Dark Rum (80 proof)",
      "Glaze: 1/4 lb Butter",
      "Glaze: 1/4 cup Water",
      "Glaze: 1 cup Sugar",
      "Glaze: 1/2 cup Bacardi Dark Rum"
    ],
    instructions: [
      "Preheat oven to 325°F. Grease and flour a 10-inch tube or Bundt pan.",
      "Mix cake mix, pudding, eggs, water, oil, and rum until smooth.",
      "Pour into pan and bake for 1 hour. Cool in pan for 25 minutes.",
      "Invert onto serving plate. Prick top with a fork.",
      "Prepare glaze: Melt butter in saucepan. Stir in water and sugar. Boil 5 minutes, stirring constantly. Remove from heat and stir in rum.",
      "Spoon and brush glaze over cake, allowing it to absorb into the holes.",
      "Optional: Drizzle with chocolate glaze and sprinkle with chopped walnuts."
    ],
    addedBy: "Nan",
    temp: "325°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Singapore Beef & Tomatoes",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1 lb Lean Beef Steak (sirloin or round), cut into thin strips",
      "2 tsp Grated Ginger Root (or 1/2 tsp ground ginger)",
      "1 clove Garlic, minced",
      "2 Tbsp Soya Sauce",
      "1 Tbsp Vegetable Oil",
      "1 Tbsp Cornstarch",
      "1 can Sliced Tomatoes",
      "1 tsp each Curry Powder and Cumin",
      "2 medium Carrots, cut into matchstick pieces",
      "2 Green Onions, sliced"
    ],
    instructions: [
      "Brown beef, ginger, and garlic in hot oil. Remove from pan.",
      "Add remaining ingredients (except onions) to the pan.",
      "Cook and stir until mixture comes to a boil.",
      "Simmer for 5 minutes, stirring occasionally, until carrots are tender.",
      "Return beef to skillet and heat through.",
      "Sprinkle with green onions and serve over hot cooked rice."
    ],
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Fruit Pizza",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Margarine",
      "1 1/4 cup Brown Sugar",
      "1 cup Flour",
      "1 tsp Baking Powder",
      "1/2 tsp Salt",
      "1 tsp Vanilla",
      "1 cup Fine Coconut",
      "1 1/2 cups Rolled Oats",
      "1 Egg",
      "Topping: 1 (250g) pkg Cream Cheese",
      "Topping: 1/2 cup White Sugar",
      "Fruit: Bananas, Grapes, Kiwi, Strawberries, Raspberries",
      "Glaze: 1/2 cup White Sugar, 2 Tbsp Cornstarch, 1/2 cup Orange Juice, 1 cup Water"
    ],
    instructions: [
      "Grease a pizza pan. Mix dough ingredients in order given.",
      "Spread evenly on pan and bake at 350°F for 10-15 minutes.",
      "Let crust cool completely.",
      "Cream together cream cheese and sugar; spread over cooled crust.",
      "Arrange fruit pieces beautifully on top.",
      "Cook glaze ingredients until thick. Let cool and spread over the fruit.",
      "Chill before serving."
    ],
    addedBy: "Nan",
    temp: "350°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Italian Spaghetti Sauce",
    category: Category.MAIN_DISHES,
    ingredients: [
      "2 lbs Ground Beef",
      "2 Onions, chopped",
      "1 Green Pepper, chopped",
      "1 can (16 oz) Mushroom stems",
      "2 tsp Salt",
      "2 Tbsp Sugar",
      "2 cans (20 oz) Tomatoes (mashed)",
      "1 can (13 oz) Tomato Paste",
      "1 can Water (use paste tin)",
      "1 tsp Oregano",
      "1/2 tsp minced Garlic",
      "1 Tbsp Tabasco Sauce",
      "1 Bay Leaf"
    ],
    instructions: [
      "Brown beef and onions in a large pot.",
      "Add Green Pepper and remaining ingredients.",
      "Simmer uncovered for 4 hours, stirring occasionally to prevent sticking.",
      "Remove bay leaf before serving."
    ],
    addedBy: "Nan",
    cookTime: "4 hours",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Frozen Fast Forward Dessert",
    category: Category.DESSERTS,
    ingredients: [
      "6 Tbsp Butter or Hard Margarine",
      "1 1/3 cups Graham Crumbs",
      "1 pkg Vanilla Instant Pudding",
      "2/3 cup Milk",
      "4 cups Butter Pecan Ice Cream",
      "1 cup Whipping Cream",
      "1 Skor Bar, crushed"
    ],
    instructions: [
      "Melt butter and stir in graham crumbs. Press into an ungreased 10-inch springform pan. Chill.",
      "Beat pudding powder with milk in a large bowl until smooth.",
      "Fold in the ice cream.",
      "In a separate bowl, beat whipping cream until stiff; fold into the pudding mixture.",
      "Pour over graham base.",
      "Sprinkle crushed Skor bar over the top.",
      "Put in freezer for at least 15 minutes before using.",
      "Cut into 12 wedges to serve."
    ],
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chocolate Turtle Cheesecake",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Graham Crumbs",
      "6 Tbsp melted Butter",
      "14 oz bag Caramels",
      "5 oz can Evaporated Milk",
      "2 pkgs (8 oz) Cream Cheese",
      "1/2 cup Sugar",
      "1 tsp Vanilla",
      "2 Eggs",
      "1/2 cup semi-sweet Chocolate Chips (melted)"
    ],
    instructions: [
      "Combine crumbs and butter; press into bottom of pan. Bake at 350°F for 10 minutes.",
      "In a pot, melt caramels with evaporated milk. Pour over the crust.",
      "Combine cream cheese, sugar, and vanilla. Add eggs one at a time.",
      "Blend in melted chocolate chips.",
      "Pour over the caramel layer.",
      "Bake at 350°F for 40 minutes.",
      "Chill thoroughly before serving."
    ],
    addedBy: "Nan",
    temp: "350°F",
    cookTime: "40 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Mars Bars Squares",
    category: Category.DESSERTS,
    ingredients: [
      "4 Mars Bars",
      "1/2 cup Butter",
      "2 cups Rice Krispies",
      "1/2 cup Coconut",
      "1/4 cup Butter (for topping)",
      "1 small bag Chocolate Chips"
    ],
    instructions: [
      "Melt the 4 Mars Bars and 1/2 cup butter together in a saucepan.",
      "Stir in Rice Krispies and coconut.",
      "Press into a 9x9 inch pan.",
      "Melt chocolate chips and remaining 1/4 cup butter together.",
      "Spread over the top and refrigerate until firm."
    ],
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chipit Bars",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Graham Wafer crumbs",
      "1 cup Coconut",
      "1 cup Chocolate Chips",
      "2 tsp Baking Powder",
      "1 can Eagle Brand Condensed Milk"
    ],
    instructions: [
      "Mix all ingredients together in a large bowl.",
      "Spread into a greased baking pan.",
      "Bake at 350°F for 25 minutes.",
      "Let cool and top with chocolate icing if desired."
    ],
    addedBy: "Nan",
    temp: "350°F",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Lemon Bread",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1/2 cup Butter or Shortening",
      "1 cup Sugar",
      "2 Eggs, beaten",
      "1 tsp Baking Powder",
      "1 1/2 cups Flour",
      "1/2 tsp Salt",
      "1/2 cup Milk",
      "Grated rind of 1 Lemon",
      "3 tsp Lemon Juice",
      "Glaze: juice of 1 Lemon and 1/4 cup Sugar"
    ],
    instructions: [
      "Cream butter and sugar until light and fluffy.",
      "Add beaten eggs.",
      "Sift dry ingredients and add alternately with milk.",
      "Stir in lemon rind and juice.",
      "Bake in a greased loaf pan at 350°F for 45-50 minutes.",
      "After removing from oven, while still hot in the pan, spread the lemon juice and sugar glaze over the top."
    ],
    addedBy: "Nan",
    temp: "350°F",
    cookTime: "50 mins",
    description: "Orange Bread can be made exactly the same way using oranges instead.",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "The Monster Batch Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Butter or Margarine (softened)",
      "3 cups Peanut Butter",
      "2 cups Granulated Sugar",
      "2 1/2 cups Brown Sugar",
      "6 Eggs",
      "1 cup Chocolate Chips",
      "1 tsp Vanilla",
      "4 tsp Baking Soda",
      "5 cups Rolled Oats",
      "5 cups Crispy Rice Cereal"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "In a large bowl, cream butter, peanut butter, and sugars.",
      "Beat in eggs, vanilla, and baking soda.",
      "Stir in oats, rice cereal, and chocolate chips.",
      "Form dough into 1-inch balls and place on ungreased cookie sheets.",
      "Bake for 8 to 10 minutes."
    ],
    addedBy: "Nan",
    temp: "350°F",
    cookTime: "10 mins",
    description: "A huge batch for the whole family!",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Hodge Podge",
    category: Category.SIDE_DISHES,
    ingredients: [
      "Baby Carrots",
      "New Potatoes",
      "Green Beans",
      "Yellow Beans",
      "Shell Peas",
      "Sugar Peas or Snow Peas",
      "1 cup Cream (or blend)",
      "Butter",
      "Salt and Pepper to taste"
    ],
    instructions: [
      "Clean vegetables and cut up.",
      "In a large saucepan, bring 2 cups water to a boil.",
      "Add vegetables (cook carrots and potatoes first as they take longer).",
      "Reduce heat to medium and steam until tender (7-10 minutes).",
      "Vegetables should remain bright and colourful.",
      "Drain, saving about 1 cup of the vegetable juice.",
      "Blend together cream, butter, salt, pepper, and the reserved juice.",
      "Mix into the warm vegetables and serve immediately."
    ],
    addedBy: "Joanie",
    description: "A fresh summer vegetable tradition.",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Lobster Dip",
    category: Category.APPETIZERS,
    ingredients: [
      "1 can Lobster (thawed, drained)",
      "8 oz Cream Cheese",
      "1 cup Mayonnaise",
      "1 cup grated Cheddar Cheese",
      "2 tsp Dill Weed (optional)",
      "1/2 cup diced Onion"
    ],
    instructions: [
      "Cream the cream cheese, then add mayonnaise and mix well.",
      "Add all other ingredients except lobster and stir.",
      "Fold in the lobster pieces.",
      "Bake in a 325°F oven for approximately 20 minutes.",
      "Serve warm with crackers."
    ],
    addedBy: "Donetta",
    temp: "325°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Minestrone Soup",
    category: Category.SOUPS_SALADS,
    ingredients: [
      "1 1/2 lb Ground Round beef",
      "1 cup diced Onions",
      "1 cup diced Zucchini",
      "1/2 cup diced Okra",
      "1 cup cubed Potatoes",
      "1 cup sliced Carrots",
      "1/2 cup diced Celery",
      "1 cup shredded Cabbage",
      "1 14oz tin Tomatoes",
      "1/4 cup Rice or 1/2 cup Macaroni elbow noodles",
      "1 1/2 qts Water",
      "1 Bay leaf",
      "1/2 tsp Thyme",
      "5 tsp Salt",
      "Pepper to taste",
      "1 tsp Worcestershire Sauce",
      "1/2 cup grated Parmesan Cheese"
    ],
    instructions: [
      "Brown ground round in a large kettle.",
      "Add all vegetables, water, and spices; bring to a boil.",
      "Sprinkle in rice or noodles.",
      "Cover and simmer for at least one hour.",
      "Sprinkle with grated parmesan cheese before serving."
    ],
    addedBy: "Nan",
    cookTime: "1 hour+",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Whipped Shortbread",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup soft Margarine",
      "1/4 cup Corn Starch",
      "1/2 cup Icing Sugar",
      "1 1/2 cups sifted Flour"
    ],
    instructions: [
      "Cream margarine and sugars until very light and fluffy.",
      "Gradually add corn starch and flour.",
      "Drop by teaspoonfuls onto a cookie sheet.",
      "Bake in a 325°F oven for 20 minutes."
    ],
    addedBy: "Bernice",
    temp: "325°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Polish Pancakes",
    category: Category.MAIN_DISHES,
    ingredients: [
      "6 Eggs",
      "1 qt Milk",
      "1/2 tsp Salt",
      "Flour (enough to make easy to spread dough)",
      "2 qt Cottage Cheese",
      "6 Egg Yolks",
      "1 sq Margarine",
      "1 pkg Raisins",
      "4 Oranges (peel only)",
      "Icing Sugar for rolling"
    ],
    instructions: [
      "Mix eggs, milk, salt, and flour to make a thin spreadable dough.",
      "In a bowl, mix cottage cheese, yolks, margarine, raisins, and orange peel.",
      "Cook pancakes until light brown.",
      "Spread the cheese mixture on pancakes and roll up.",
      "Roll in icing sugar and serve."
    ],
    addedBy: "Selma",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Moose Hunters",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Brown Sugar",
      "1 cup Crisco Oil",
      "1 cup Molasses",
      "1/2 cup Milk",
      "2 tsp Baking Soda (put in milk)",
      "1 Egg, beaten",
      "1 tsp Ginger",
      "1/2 tsp Cinnamon",
      "1 tsp Salt",
      "4 cups Flour"
    ],
    instructions: [
      "Pour oil over brown sugar and add molasses, then milk (with soda).",
      "Add the beaten egg and dry ingredients.",
      "Roll out thick.",
      "Bake in 325°F oven for 12 minutes."
    ],
    addedBy: "Nan",
    temp: "325°F",
    cookTime: "12 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Christmas Morning Wife Saver",
    category: Category.MAIN_DISHES,
    ingredients: [
      "16 slices bread (crusts off)",
      "Ham or Bacon slices",
      "Cheddar cheese slices",
      "4 Eggs",
      "3 cups Milk",
      "1/2 tsp Salt",
      "1/4 tsp Pepper",
      "1 tsp Dry Mustard",
      "1/4 cup minced Onion",
      "1/4 cup finely chopped Green Pepper",
      "1-2 tsp Worcestershire Sauce",
      "Dash Tabasco",
      "1/2 cup Butter",
      "Crushed Cornflakes"
    ],
    instructions: [
      "Arrange 8 slices of bread in bottom of buttered 9x13 pan.",
      "Cover bread with a layer of ham then cheese.",
      "Cover with remaining bread slices.",
      "Beat eggs with salt and pepper. Add dry mustard, onion, green pepper, Worcestershire, Tabasco, and milk.",
      "Pour over sandwiches. Cover and refrigerate overnight.",
      "In the morning, melt butter and pour over top. Sprinkle with crushed cornflakes.",
      "Bake uncovered for 1 hour at 350°F."
    ],
    temp: "350°F",
    cookTime: "1 hour",
    addedBy: "Nan",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Spareribs or Chicken Sauce",
    category: Category.SAUCES,
    ingredients: [
      "Onion (fried in Butter)",
      "1 cup Ketchup",
      "1 cup Water (fill cup rest of way after vinegar/lemon)",
      "2 Tbsp Vinegar",
      "2 Tbsp Lemon Juice",
      "1 Tbsp Worcestershire Sauce",
      "1 Tbsp Mustard",
      "2 Tbsp Brown Sugar",
      "Salt and Pepper"
    ],
    instructions: [
      "Fry onion in butter until soft.",
      "In a bowl, combine ketchup, water, vinegar, lemon juice, Worcestershire sauce, mustard, brown sugar, salt, and pepper.",
      "Pour over partially cooked spareribs or chicken and bake as directed in meat recipe (usually 1 hour at 350°F after initial browning)."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chicken Dip (Mexican Layered Dip)",
    category: Category.APPETIZERS,
    ingredients: [
      "2 cups cooked chopped Chicken (boneless, skinless)",
      "1 cup Onion, chopped",
      "2 Tbsp Oil",
      "1/4 cup Jalapeno Peppers, chopped",
      "1 cup Salsa",
      "1 can Cream of Mushroom Soup",
      "1 1/2 cups Cheddar Cheese, grated",
      "1 1/2 cups Mozzarella Cheese, grated",
      "Tortilla Wraps"
    ],
    instructions: [
      "Sauté onion in oil until soft, then add jalapeno peppers.",
      "Stir in cream of mushroom soup and heat through.",
      "Add most of the cheddar and mozzarella (reserve a little for topping) and melt slowly to a thick, creamy mixture.",
      "Line a casserole dish with tortilla wraps.",
      "Layer salsa, chopped chicken, and creamy cheese mixture; repeat layers.",
      "Top with reserved cheese and bake at 350°F for about 30 minutes or until hot through and bubbly."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "30 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Russian Chicken",
    category: Category.MAIN_DISHES,
    ingredients: [
      "Chicken Breasts",
      "1/2 bottle Apricot Jam",
      "1/2 bottle Russian Dressing",
      "1 pkg Onion Soup Mix (optional)"
    ],
    instructions: [
      "Pre-cook chicken breasts for 30 minutes in the oven or 20 minutes in boiling water.",
      "Combine apricot jam and Russian dressing (and onion soup mix if desired).",
      "Place chicken in a baking dish and pour sauce over top.",
      "Bake in oven for about 25 minutes or until chicken is cooked through and sauce is bubbly."
    ],
    addedBy: "Family",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Ham & Cheese Strata",
    category: Category.MAIN_DISHES,
    ingredients: [
      "12 slices White Bread",
      "1 1/2 cups (6 oz) shredded Mild Cheddar Cheese",
      "1 (10 oz) pkg Frozen Broccoli, thawed and well drained",
      "1 cup Ham, chopped",
      "1 (8 oz) pkg Cream Cheese",
      "3 Eggs",
      "1 cup Milk",
      "1/2 tsp Dry Mustard"
    ],
    instructions: [
      "Place 6 bread slices on bottom of a 12x8 inch dish.",
      "Cover with 1 cup cheddar cheese, broccoli, and ham.",
      "Top with remaining bread slices cut in half diagonally.",
      "Beat cream cheese until light, then add eggs one at a time, mixing well after each.",
      "Blend in milk and dry mustard.",
      "Pour mixture over bread layers and top with remaining cheddar cheese.",
      "Bake at 350°F for 45–50 minutes. Let stand 10 minutes before serving."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "50 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Tuna Casserole (Tomato)",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1 (14 oz) can Tomatoes",
      "1 can Cream of Mushroom Soup",
      "2 (6 1/2 oz) tins Tuna, drained",
      "3 Cheese Slices",
      "Potato Chips, crushed",
      "Salt and Pepper"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "In a bowl, mix tomatoes and cream of mushroom soup.",
      "Line bottom of a 2-quart casserole with crushed potato chips.",
      "Add a layer of tuna, then a layer of tomato mixture; repeat layers, finishing with tuna.",
      "Place cheese slices on top and pour remaining tomato mixture over all.",
      "Bake for 1 hour at 350°F until hot and bubbly."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Oven Rice",
    category: Category.SIDE_DISHES,
    ingredients: [
      "2 cups Uncle Ben's Rice",
      "1 cup Mushroom Pieces",
      "1 envelope Onion Soup Mix",
      "1/3 cup Soya Sauce",
      "1/3 cup Oil",
      "3 1/2 cups Water"
    ],
    instructions: [
      "Combine rice, mushroom pieces, onion soup mix, soya sauce, oil, and water in a casserole dish.",
      "Cover and bake at 350°F for 1 hour, until rice is tender and liquid absorbed."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Cabbage Rolls",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1 medium Cabbage",
      "2 lbs Hamburger",
      "Onions, chopped",
      "1 Egg, beaten",
      "1/2 cup cooked 7-minute Rice",
      "Spices to taste",
      "Sauce: 1 large can Tomato Juice",
      "Sauce: 1 can Tomato Soup",
      "Sauce: Salt and Pepper"
    ],
    instructions: [
      "Cook cabbage in boiling water until leaves are easy to pull apart; drain and cool slightly.",
      "In a bowl, mix hamburger, chopped onions, beaten egg, cooked rice, and spices.",
      "Place portions of meat mixture on cabbage leaves and roll up, tucking in sides.",
      "Place rolls in a large roasting pan.",
      "Combine tomato juice, tomato soup, salt, and pepper; pour over cabbage rolls.",
      "Cover and bake in a 325°F oven for 1 1/2 to 2 hours."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "1.5–2 hours",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Meat Loaf (Version 1)",
    category: Category.MAIN_DISHES,
    ingredients: [
      "2 lbs Hamburger",
      "1/2 cup Cracker Crumbs",
      "1/4 cup Milk",
      "2 Eggs",
      "1/4 cup Catsup",
      "1/2 cup Onion, chopped",
      "Seasoning Salt",
      "Salt and Pepper"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "In a mixing bowl, combine hamburger, cracker crumbs, milk, eggs, catsup, chopped onion, seasoning salt, salt, and pepper.",
      "Form into a loaf and place in a loaf pan or baking dish.",
      "Bake for about 1 hour at 350°F, or until cooked through."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Meat Loaf (Version 2)",
    category: Category.MAIN_DISHES,
    ingredients: [
      "2 slices White Bread (about 1 cup Bread Crumbs)",
      "1/3 cup Milk",
      "1 Egg, beaten",
      "2 Tbsp Ketchup",
      "1 tsp Dry Mustard",
      "1 small Onion, chopped",
      "1/3 cup grated Cheddar Cheese",
      "2 cups Ground Beef",
      "2 tsp Salt and Pepper"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Soak bread crumbs in milk.",
      "Beat in the egg, then mix in ketchup, dry mustard, onion, cheddar cheese, ground beef, salt, and pepper.",
      "Turn into an 8x4x2.5 inch loaf pan.",
      "Bake for 45 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "45 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Spaghetti Sauce (Tomato Soup)",
    category: Category.SAUCES,
    ingredients: [
      "2 cans Tomato Soup",
      "1 can Tomato Paste",
      "1 Onion, chopped",
      "1/2 Green Pepper, chopped",
      "1/2 bottle Hot Peppers (crushed Chili Peppers)",
      "1 can Mushrooms",
      "1 bag Hamburger, browned",
      "Garlic",
      "Onion Salt",
      "Oregano",
      "Salt and Pepper"
    ],
    instructions: [
      "Put hamburger in a pot with a little water and simmer until cooked; drain excess fat if desired.",
      "Chop onion, green pepper, and mushrooms.",
      "Add tomato soup, tomato paste, vegetables, hot peppers, and seasonings to the cooked hamburger.",
      "Simmer together until flavors are blended and sauce has thickened to desired consistency."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Baked Salmon in Crust",
    category: Category.MAIN_DISHES,
    ingredients: [
      "Crust: 2 1/2 cups Flour",
      "Crust: 1 tsp Salt",
      "Crust: 3 1/2 tsp Baking Powder",
      "Crust: 1/4 lb Tenderflake (Lard)",
      "Crust: 1 Egg",
      "Crust: Milk (enough to roll out)",
      "Filling: Spinach",
      "Filling: Salmon Fillet",
      "Filling: Havarti Cheese"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Prepare crust by cutting Tenderflake into flour, salt, and baking powder, then mixing in egg and enough milk to make a rollable dough.",
      "Roll out dough and layer spinach, salmon fillet, and Havarti cheese on one half.",
      "Fold dough over filling and seal edges with milk.",
      "Place on a baking sheet and bake at 400°F for about 25 minutes until crust is golden and salmon is cooked."
    ],
    addedBy: "Family",
    temp: "400°F",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Sweet & Sour Meatballs",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1 1/2 lb Hamburger (formed into Meatballs)",
      "1/2 cup Ketchup",
      "1 cup Water",
      "1/2 cup Brown Sugar",
      "1/4 cup Vinegar",
      "2 Tbsp Cornstarch",
      "1 Green Pepper, chopped",
      "1 large Onion, chopped",
      "1 (19 oz) can Pineapple Chunks, with juice",
      "Parsley"
    ],
    instructions: [
      "Brown hamburger meatballs in a frying pan; drain excess fat.",
      "In a small bowl, mix brown sugar and cornstarch well.",
      "Add ketchup and vinegar.",
      "Add enough water to reserved pineapple juice to make 1 cup of liquid and stir into mixture.",
      "Add chopped green pepper, onion, and pineapple chunks.",
      "Pour sauce over meatballs and toss lightly to mix.",
      "Simmer on stovetop until sauce thickens and vegetables are tender."
    ],
    addedBy: "Family",
    cookTime: "30 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Dumplings for Stew",
    category: Category.SIDE_DISHES,
    ingredients: [
      "1 1/2 cups Flour",
      "2 tsp Baking Powder",
      "3/4 tsp Salt",
      "3 Tbsp Shortening",
      "3/4 cup Milk"
    ],
    instructions: [
      "Mix flour, baking powder, and salt in a bowl.",
      "Cut in shortening until mixture resembles coarse crumbs.",
      "Stir in milk just until combined.",
      "Drop dough by spoonfuls onto simmering stew.",
      "Cook uncovered for 10 minutes, then cover and cook 10 minutes longer."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Pâté Acadian Meat Pie",
    category: Category.MAIN_DISHES,
    ingredients: [
      "Pastry: 1 lb Lard",
      "Pastry: 8 cups Flour",
      "Pastry: 2 tsp Salt",
      "Pastry: 16 tsp Baking Powder",
      "Pastry: 2 cups Milk",
      "Meat: 3 lbs Beef",
      "Meat: 3 lbs Pork",
      "Meat: 3 lbs Chicken (or Deer or Rabbit)",
      "Meat: 4 Onions",
      "Meat: 1/4 tsp Pepper",
      "Meat: 1 1/2 tsp Salt",
      "Meat: 1/4 tsp dried Green Sage"
    ],
    instructions: [
      "Stew beef, pork, and chicken until well cooked and meat removes easily from the bone; remove bones and gristle.",
      "Grate or finely chop onions and add to meat mixture along with pepper, salt, and sage; cool slightly.",
      "Prepare pastry by cutting lard into flour, salt, and baking powder, then mixing in milk to form dough.",
      "Line pie plates with pastry, fill with meat mixture, and top with pastry lids, sealing edges.",
      "Bake at 350°F until pastry is golden and filling is heated through."
    ],
    addedBy: "Family",
    temp: "350°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Adrienne's Steak Marinade",
    category: Category.SAUCES,
    ingredients: [
      "Rub: Steak Spice",
      "Rub: Pepper",
      "Rub: Onion Salt",
      "Rub: Garlic Salt",
      "Sauce: 1 bottle BBQ Sauce",
      "Sauce: 1/2 cup Soya Sauce",
      "Sauce: 1 cup Oil",
      "Sauce: 1/2 bottle Worcestershire Sauce"
    ],
    instructions: [
      "Sprinkle steaks on both sides with steak spice, pepper, onion salt, and garlic salt and let stand 3–4 minutes.",
      "In a bowl, combine BBQ sauce, soya sauce, oil, and Worcestershire sauce.",
      "Place steaks in marinade, cover, and refrigerate for 24–48 hours, turning occasionally.",
      "Grill or broil steaks to desired doneness."
    ],
    addedBy: "Adrienne",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Hot Chili Dip",
    category: Category.APPETIZERS,
    ingredients: [
      "Cream Cheese",
      "Chunky Chili",
      "Shredded Cheese",
      "Salsa"
    ],
    instructions: [
      "Spread cream cheese over the bottom of an ovenproof dish.",
      "Spoon chunky chili over the cream cheese.",
      "Top with shredded cheese, then spoon salsa over the top.",
      "Bake at 325°F for about 20 minutes, until cheese is melted and dip is hot.",
      "Serve warm with tortilla chips or crackers."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Carrot Salad",
    category: Category.SOUPS_SALADS,
    ingredients: [
      "1 can (8 oz) Tomato Sauce",
      "1/2 cup Sugar",
      "1/2 cup White Vinegar",
      "1/3 cup Oil",
      "1 tsp Salt",
      "1 tsp Dry Mustard",
      "1/2 tsp Pepper",
      "2 lbs Carrots, peeled, sliced thin, cooked and drained (about 6 cups)",
      "1 Red Onion, sliced thin",
      "1 Green Pepper, sliced thin"
    ],
    instructions: [
      "In a large bowl, combine tomato sauce, sugar, vinegar, oil, salt, dry mustard, and pepper; stir until blended.",
      "Add cooked carrots, red onion, and green pepper; stir to mix well.",
      "Cover and chill, preferably overnight, before serving."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Strawberry Cheesecake (No-Bake)",
    category: Category.DESSERTS,
    ingredients: [
      "Graham Wafer Crust for 9x9 inch pan",
      "8 oz Cream Cheese",
      "3 Tbsp White Sugar",
      "1 tsp Vanilla",
      "1 cup Yogurt",
      "1 cup Strawberries, cut up"
    ],
    instructions: [
      "Prepare a graham wafer crumb base in a 9x9 inch pan.",
      "In a bowl, cream together cream cheese and sugar until smooth.",
      "Add vanilla, yogurt, and cut-up strawberries; mix well.",
      "Pour mixture over crust and chill until set."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Lemon Delight Squares",
    category: Category.DESSERTS,
    ingredients: [
      "Crust: 2 cups Flour",
      "Crust: 1 cup Butter, softened",
      "Crust: 1/2 cup chopped Pecans",
      "Crust: 2 Tbsp White Sugar",
      "Filling: 2 (8 oz) pkgs Cream Cheese, softened",
      "Filling: 2 cups Icing Sugar",
      "Topping: 2 Lemon Pie Fillings (prepared as directed)",
      "Topping: Graham Wafer Crumbs or Icing Sugar for garnish"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Mix crust ingredients and press into an ungreased 9x13 inch pan.",
      "Bake crust for 15–16 minutes; cool completely.",
      "Beat cream cheese and icing sugar until smooth; spread over cooled crust and refrigerate 15 minutes.",
      "Prepare lemon pie fillings as directed on package; cool slightly, then spread over cream cheese layer.",
      "Sprinkle with graham crumbs or icing sugar and refrigerate until set."
    ],
    addedBy: "Family",
    temp: "375°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Date Squares",
    category: Category.DESSERTS,
    ingredients: [
      "Filling: 1 pkg Dates",
      "Filling: 1 cup Brown Sugar",
      "Filling: 1 cup Hot Water",
      "Crust: 1 1/2 cups Flour",
      "Crust: 1/2 tsp Baking Soda",
      "Crust: 1/2 tsp Salt",
      "Crust: 1 1/2 cups Rolled Oats",
      "Crust: 1 cup Brown Sugar",
      "Crust: 1/2 cup Butter"
    ],
    instructions: [
      "Cook dates, brown sugar, and hot water together until soft; set aside to cool.",
      "Preheat oven to 375°F.",
      "Sift flour, baking soda, and salt; add rolled oats and brown sugar.",
      "Cut in butter until mixture resembles coarse crumbs.",
      "Press half of crumb mixture into a greased 8x12 inch pan.",
      "Spread cooled date filling over crust, then top with remaining crumbs and press gently.",
      "Bake for about 25 minutes at 375°F until lightly browned; cut while warm."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Swirl of Chocolate Cheese Squares",
    category: Category.DESSERTS,
    ingredients: [
      "Crust: 1 cup Graham Cracker Crumbs",
      "Crust: 1/4 cup Butter, melted",
      "Crust: 3 Tbsp Sugar",
      "Filling: 1 (8 oz) pkg Cream Cheese",
      "Filling: 3/4 cup undiluted Evaporated Milk",
      "Filling: 1 Egg",
      "Filling: 2 Tbsp Flour",
      "Filling: 2 tsp Vanilla",
      "Filling: 1/2 cup Semi-sweet Chocolate Chips"
    ],
    instructions: [
      "Preheat oven to 300°F.",
      "Combine crust ingredients and press into an 8-inch pan.",
      "Beat cream cheese with 1/2 cup sugar, then beat in evaporated milk, egg, flour, and vanilla until smooth.",
      "Melt chocolate chips and stir about 1/2 cup of the cheese mixture into the chocolate.",
      "Pour remaining cheese mixture over crust, then drizzle chocolate mixture over and swirl with a knife.",
      "Bake at 300°F for 40–45 minutes until set.",
      "Cool before cutting into squares."
    ],
    addedBy: "Family",
    temp: "300°F",
    cookTime: "45 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Mandarin Cake (Scratch)",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup White Sugar",
      "1 Egg",
      "1 cup Flour",
      "1/4 tsp Salt",
      "1 tsp Baking Soda",
      "1 can Mandarin Oranges with Juice",
      "Topping: 3/4 cup Brown Sugar",
      "Topping: 2 tsp Butter, melted",
      "Topping: 3 tsp Canned Milk"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix sugar and egg together.",
      "Add flour, salt, and baking soda; stir in mandarin oranges with juice.",
      "Pour into an 8x8 inch pan and bake at 350°F until done (about 30–35 minutes).",
      "For topping, combine brown sugar, melted butter, and canned milk.",
      "Spread topping over hot cake and return to oven for about 10 minutes."
    ],
    addedBy: "Family",
    temp: "350°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Orange Mandarine Cake (Cake Mix)",
    category: Category.DESSERTS,
    ingredients: [
      "1 White Cake Mix (baked)",
      "1 pkg Orange Jello",
      "2 envelopes Dream Whip (prepared)",
      "1 can Mandarin Oranges, drained"
    ],
    instructions: [
      "Break baked and cooled white cake into pieces in a large bowl.",
      "Prepare orange Jello using the juice from mandarins in place of cold water; let set until starting to jell.",
      "Fold prepared Dream Whip into the Jello, then fold in mandarin oranges.",
      "Fold the mixture into the crumbled cake.",
      "Spoon into a tube pan and refrigerate for about 2 hours until set.",
      "Unmold onto a plate and ice with more Dream Whip; decorate with mandarin segments."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Carrot Cake",
    category: Category.DESSERTS,
    ingredients: [
      "4 medium Carrots, grated (about 2 cups)",
      "1/2 cup Walnuts, finely chopped",
      "1 (8 oz) can Crushed Pineapple, drained",
      "2 cups Sugar",
      "4 Eggs",
      "1 1/2 cups Mazola Oil",
      "2 cups Flour",
      "1 1/2 tsp Baking Soda",
      "2 tsp Baking Powder",
      "2 tsp Cinnamon",
      "1 tsp Salt",
      "Icing: 6 oz Cream Cheese",
      "Icing: 6 Tbsp Butter",
      "Icing: Orange Peel",
      "Icing: 1 tsp Vanilla",
      "Icing: 2 cups Icing Sugar"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "In a bowl, set aside grated carrots, walnuts, and pineapple.",
      "Beat sugar and eggs together, then beat in oil.",
      "Stir flour, baking soda, baking powder, cinnamon, and salt into egg mixture.",
      "Fold in carrots, pineapple, and nuts.",
      "Pour into a greased pan and bake 45–50 minutes at 350°F.",
      "For icing, blend cream cheese, butter, orange peel, vanilla, and icing sugar until smooth; spread on cooled cake."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "50 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "War Cake",
    category: Category.DESSERTS,
    ingredients: [
      "1 lb Raisins",
      "2 cups Brown Sugar",
      "1/2 cup Shortening",
      "1/2 tsp Salt",
      "1 1/2 tsp Cloves",
      "1 1/2 tsp Cinnamon",
      "1 tsp Nutmeg",
      "2 cups Water",
      "1 Egg",
      "3 cups Flour",
      "2 level tsp Baking Soda"
    ],
    instructions: [
      "Boil raisins, brown sugar, shortening, salt, cloves, cinnamon, nutmeg, and water together for 3–4 minutes; cool.",
      "Preheat oven to 350°F.",
      "Stir in egg, then flour and baking soda.",
      "Pour into a greased pan and bake about 1 hour at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Hot Molasses Cake",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Shortening",
      "2 cups Molasses",
      "1 tsp Ginger",
      "1 tsp Nutmeg",
      "1 tsp Cinnamon",
      "2 Eggs",
      "4 cups Flour",
      "1/2 tsp Salt",
      "2 tsp Baking Powder",
      "2 cups Hot Water",
      "3 tsp Baking Soda"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Cream shortening, molasses, and spices together.",
      "Add eggs and beat well.",
      "Combine flour, salt, and baking powder.",
      "Dissolve baking soda in hot water.",
      "Add dry ingredients to creamed mixture alternately with hot water/soda mixture.",
      "Pour into a greased pan and bake 50–60 minutes at 325°F."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "60 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Fudge Brownies",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Butter or Margarine",
      "2 squares Unsweetened Chocolate",
      "1 cup Sugar",
      "2 Eggs",
      "1 tsp Vanilla",
      "3/4 cup Flour",
      "Variation: 1 cup Cocoa instead of chocolate squares",
      "Frosting: 3 Tbsp melted Butter",
      "Frosting: 1/4 cup Cocoa",
      "Frosting: 1/4 cup Milk",
      "Frosting: 1/2 tsp Vanilla",
      "Frosting: 2 cups Icing Sugar"
    ],
    instructions: [
      "Preheat oven to 350°F and grease an 8x8 inch pan.",
      "Melt butter and chocolate together; remove from heat.",
      "Stir in sugar, then eggs and vanilla.",
      "Stir in flour just until combined.",
      "Bake at 350°F for about 30 minutes.",
      "For frosting, combine melted butter, cocoa, milk, vanilla, and icing sugar; beat until smooth and spread on cooled brownies."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "30 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Christmas Fruit Cake (Light/Creamed)",
    category: Category.DESSERTS,
    ingredients: [
      "Fruit: 6 cups Raisins",
      "Fruit: 6 cups Currants",
      "Fruit: 4 cups chopped Dates",
      "Fruit: 2 cups Glazed Cherries",
      "Fruit: 1 cup chopped Pineapple",
      "Fruit: 1 cup Mixed Fruit",
      "Fruit: 1 1/2 cups Blanched Almonds",
      "Batter: 3 cups Shortening",
      "Batter: 5 cups Brown Sugar",
      "Batter: 2 tsp Vanilla Extract",
      "Batter: 2 tsp Lemon Extract",
      "Batter: 2 tsp Almond Extract",
      "Batter: 1 cup Crushed Pineapple",
      "Batter: Rind of 1 Lemon",
      "Batter: 10 Egg Yolks",
      "Batter: 8 cups Flour",
      "Batter: 1 tsp Baking Soda",
      "Batter: 2 tsp Salt",
      "Batter: 1 tsp Cinnamon",
      "Batter: 1 1/2 tsp Nutmeg",
      "Batter: 3/4 tsp Cloves",
      "Batter: 1 cup Sour Milk",
      "Batter: 10 Egg Whites"
    ],
    instructions: [
      "Preheat oven to 325°F and prepare loaf or tube pans, lining with paper if desired.",
      "Cream shortening and brown sugar until light and fluffy.",
      "Blend in extracts, crushed pineapple, and lemon rind.",
      "Beat egg yolks until thick and add to sugar mixture.",
      "Sift flour with baking soda, salt, cinnamon, nutmeg, and cloves.",
      "Add dry ingredients alternately with sour milk to creamed mixture.",
      "Beat egg whites until stiff and fold into batter.",
      "Stir in prepared fruits and nuts.",
      "Spoon into pans and bake at 325°F for 2–3 hours, until cakes test done."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "2–3 hours",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Dark Boiled Fruit Cake",
    category: Category.DESSERTS,
    ingredients: [
      "1 lb Raisins",
      "1 lb Currants",
      "1 pkg Mixed Peel",
      "1 pkg Cherries",
      "2 cups White Sugar",
      "2 cups Water",
      "1/2 tsp Cloves",
      "1 tsp Salt",
      "1 tsp Cinnamon",
      "1 tsp Nutmeg",
      "1 tsp Mixed Spice",
      "3/4 cup Shortening",
      "2 1/2–3 cups Flour",
      "1 tsp Baking Soda"
    ],
    instructions: [
      "Boil raisins, currants, mixed peel, cherries, sugar, water, spices, salt, and shortening together for 7–8 minutes; cool.",
      "Stir in flour and baking soda.",
      "Pour into prepared pans and bake in a 300°F oven for about 2 hours until done."
    ],
    addedBy: "Family",
    temp: "300°F",
    cookTime: "2 hours",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Mom's Steam Christmas Pudding",
    category: Category.DESSERTS,
    ingredients: [
      "2 1/2 cups Flour",
      "1/4 tsp Baking Soda",
      "3 tsp Baking Powder",
      "1/2 tsp Salt",
      "1/2 tsp Nutmeg",
      "1/2 tsp Cinnamon",
      "3/4 cup Shortening or Suet",
      "1/2 cup Currants",
      "1 cup Raisins",
      "1/2 cup Mixed Peel (optional)",
      "1 cup Molasses",
      "1 cup Milk"
    ],
    instructions: [
      "Mix flour, baking soda, baking powder, salt, nutmeg, and cinnamon.",
      "Cut in shortening or suet.",
      "Stir in currants, raisins, and mixed peel if using.",
      "Add molasses and milk to make a thick batter.",
      "Pour into a greased pudding mold and cover.",
      "Steam for 3 hours.",
      "Serve warm with your favorite sauce."
    ],
    addedBy: "Family",
    cookTime: "3 hours (steam)",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Apple Pie Bars",
    category: Category.DESSERTS,
    ingredients: [
      "Dough: 1 pkg Cream Cheese",
      "Dough: 1 cup Butter",
      "Dough: 1/4 cup White Sugar",
      "Dough: 3/4 cup Flour (plus extra for rolling)",
      "Dough: 1 tsp Salt",
      "Filling: 10 Granny Smith Apples, peeled and sliced",
      "Filling: 3/4 cup Icing Sugar",
      "Filling: 1 tsp Cinnamon",
      "Filling: 1 Tbsp Water"
    ],
    instructions: [
      "Prepare soft dough by mixing cream cheese, butter, sugar, flour, and salt.",
      "Divide dough in half; roll out one half into a rectangle and place on a baking sheet.",
      "Toss apple slices with icing sugar, cinnamon, and water; spread over bottom crust.",
      "Roll out remaining dough and place over apples, sealing edges.",
      "Cut slits to vent steam.",
      "Bake at 350°F for 35–40 minutes until golden.",
      "Glaze with a simple icing sugar and water glaze if desired."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "40 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Butterscotch Pie",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Milk",
      "2 Eggs, separated",
      "1 1/2 cups Brown Sugar",
      "1 tsp Vanilla",
      "Pinch Salt",
      "10 Tbsp Cornstarch or Flour"
    ],
    instructions: [
      "In a saucepan, melt brown sugar with a little of the milk and butter if desired, cooking until caramelized lightly.",
      "Whisk cornstarch or flour with some of the remaining milk until smooth.",
      "Add to pan with remaining milk and cook, stirring, until thickened.",
      "Temper egg yolks with some hot mixture, then return to pan and cook briefly.",
      "Remove from heat and stir in vanilla and salt.",
      "Pour into a baked pie shell and cool; top with meringue or whipped cream if desired."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Praline Topped Pumpkin Pie",
    category: Category.DESSERTS,
    ingredients: [
      "2 Eggs, beaten",
      "1 1/2 cups canned Pumpkin",
      "1 cup Sugar",
      "1/2 tsp Salt",
      "1 tsp Cinnamon",
      "1/4 tsp Cloves",
      "1/4 tsp Ginger",
      "1/4 tsp Nutmeg",
      "1 large can Evaporated Milk",
      "1 unbaked 9-inch Pie Shell",
      "Topping: 2 Tbsp melted Butter",
      "Topping: 1/2 cup Brown Sugar",
      "Topping: 1/3 cup chopped Pecans"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Combine eggs, pumpkin, sugar, salt, spices, and evaporated milk; mix until smooth.",
      "Pour into unbaked pie shell and bake at 425°F for 15 minutes.",
      "Reduce heat to 350°F and bake about 40 minutes more, until filling is almost set.",
      "Mix topping ingredients and sprinkle over pie.",
      "Broil briefly (about 1 minute) until bubbly; watch carefully."
    ],
    addedBy: "Family",
    temp: "425°F then 350°F",
    cookTime: "55 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Apple-Cranberry-Raisin Pie Filling",
    category: Category.DESSERTS,
    ingredients: [
      "3 cups pared, sliced Apples",
      "1 1/2 cups fresh Cranberries",
      "1/2 cup Raisins",
      "1 2/3 cups Sugar",
      "3 Tbsp Flour",
      "3/4 tsp Cinnamon",
      "2 Tbsp Butter",
      "Grated Lemon Rind",
      "Pastry for 9-inch Double-Crust Pie"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "In a bowl, mix apples, cranberries, raisins, sugar, flour, cinnamon, and lemon rind.",
      "Fill pastry-lined 9-inch pie plate with fruit mixture and dot with butter.",
      "Top with lattice or full crust, sealing edges and cutting vents if needed.",
      "Bake at 425°F for about 40 minutes, until crust is browned and filling bubbly."
    ],
    addedBy: "Family",
    temp: "425°F",
    cookTime: "40 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Apple Fritters",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Flour",
      "2 Tbsp Baking Powder",
      "1/4 tsp Salt",
      "2 Tbsp Sugar",
      "2 Eggs",
      "1 1/3 cups Milk",
      "1 Tbsp Oil",
      "5 Apples, peeled and chopped",
      "Cinnamon and Sugar for coating"
    ],
    instructions: [
      "Mix flour, baking powder, salt, and sugar together.",
      "Beat eggs with milk and oil, then mix into dry ingredients just until combined.",
      "Fold in chopped apples.",
      "Deep fry spoonfuls of batter at about 400°F for 1 1/2–2 minutes per side, until golden.",
      "Toss hot fritters in a bag with cinnamon and sugar to coat."
    ],
    addedBy: "Family",
    cookTime: "10–15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Old-Fashioned Vanilla Ice Cream",
    category: Category.DESSERTS,
    ingredients: [
      "6 Egg Yolks",
      "1 1/3 cups Sugar",
      "1/2 tsp Salt",
      "4 cups Milk, scalded",
      "2 cups Cream for whipping",
      "2 Tbsp Vanilla"
    ],
    instructions: [
      "Beat egg yolks with sugar and salt.",
      "Stir in 2 cups of the hot milk.",
      "Cook over low heat, stirring constantly, just until sugar dissolves and mixture slightly thickens; do not boil.",
      "Pour into a large bowl and chill thoroughly.",
      "Stir in remaining milk, cream, and vanilla.",
      "Pour into a 16-cup ice cream freezer can and freeze according to manufacturer's directions."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Cranberry Loaf",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "3/4 cup White Sugar",
      "1 Egg",
      "1 Tbsp Orange Rind",
      "1/3 cup Orange Juice",
      "1 large cup Cranberries",
      "1/4 cup melted Margarine",
      "2 cups Flour",
      "1 1/2 tsp Baking Powder",
      "1/2 tsp Baking Soda",
      "1/8 tsp Salt",
      "1/4 cup Milk"
    ],
    instructions: [
      "Preheat oven to 350°F and grease a loaf pan.",
      "Beat sugar and egg together.",
      "Add orange rind, orange juice, cranberries, and melted margarine.",
      "Sift together flour, baking powder, baking soda, and salt; add to wet mixture with milk and stir just to combine.",
      "Bake about 50 minutes at 350°F, or until a tester comes out clean."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "50 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Healthy Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Margarine",
      "1/4 cup Brown Sugar",
      "1/4 cup White Sugar",
      "1 Egg",
      "1 Tbsp Milk",
      "1/2 tsp Baking Soda",
      "1/2 tsp Baking Powder",
      "1 tsp Vanilla",
      "1 cup Oatmeal",
      "1 cup Chocolate Chips or Raisins",
      "1/2 cup Coconut",
      "1 cup Whole Wheat Flour"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Cream margarine and sugars.",
      "Beat in egg, milk, and vanilla.",
      "Add baking soda, baking powder, flour, oatmeal, coconut, and chocolate chips or raisins; mix well.",
      "Drop spoonfuls onto a greased cookie sheet and bake 10–15 minutes."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Moose Hunters Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Brown Sugar",
      "1 cup Crisco Oil",
      "1 cup Molasses",
      "1/2 cup Milk",
      "2 tsp Baking Soda (dissolved in milk)",
      "1 Egg, beaten",
      "1 tsp Ginger",
      "1 tsp Cinnamon",
      "1 tsp Salt",
      "4 cups Flour"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Pour oil over brown sugar and add molasses, then milk with dissolved baking soda.",
      "Add beaten egg and dry ingredients and mix into a stiff dough.",
      "Roll out thick and cut into shapes.",
      "Bake for about 12 minutes at 325°F."
    ],
    addedBy: "Nan",
    temp: "325°F",
    cookTime: "12 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chocolates (Clusters)",
    category: Category.DESSERTS,
    ingredients: [
      "1 bag Chocolate Chips",
      "1 bag Peanut Butter Chips",
      "2 small bags Ruffled Plain Potato Chips, crushed",
      "2 Crispy Crunch Bars, crushed"
    ],
    instructions: [
      "Melt chocolate chips and peanut butter chips together in the microwave, stirring until smooth.",
      "Stir in crushed potato chips and crushed Crispy Crunch bars.",
      "Spoon mixture into small foil candy cups and refrigerate until firm."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Rocky Roads",
    category: Category.DESSERTS,
    ingredients: [
      "6 oz package Chocolate Chips",
      "1/2 cup Butter",
      "2 cups small Marshmallows",
      "Whole Graham Wafers",
      "1 Egg",
      "1 cup Icing Sugar",
      "Coconut for top"
    ],
    instructions: [
      "Melt chocolate chips and butter together; cool slightly.",
      "Beat in egg and icing sugar.",
      "Line an 8-inch pan with whole graham wafers.",
      "When mixture is cool, stir in marshmallows.",
      "Pour over graham wafers and sprinkle coconut on top.",
      "Chill until firm, then cut into squares."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Crispy Chews (Jean's)",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Brown Sugar",
      "2/3 cup Corn Syrup",
      "2/3 cup Peanut Butter",
      "2 1/2 cups Rice Krispies",
      "1 cup Coconut",
      "1/2 cup Nuts"
    ],
    instructions: [
      "Combine brown sugar, corn syrup, and peanut butter in a pan over low heat and cook until sugar is dissolved.",
      "Remove from heat and stir well.",
      "Add Rice Krispies, coconut, and nuts and mix thoroughly.",
      "Drop by tablespoons onto waxed paper to cool and set."
    ],
    addedBy: "Jean",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Cathy's Molasses Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Crisco Oil",
      "1 cup Molasses",
      "1 cup Brown Sugar",
      "2 tsp Baking Soda",
      "1 Egg, beaten",
      "1/2 cup Milk",
      "4 cups Flour",
      "1 tsp Ginger",
      "2 tsp Cinnamon"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Combine oil, molasses, and brown sugar.",
      "Beat in egg and milk.",
      "Add baking soda, flour, ginger, and cinnamon and mix into a stiff dough.",
      "Shape as desired and bake at 350°F until done; for softer cookies, bake at 325°F as a variation."
    ],
    addedBy: "Cathy",
    temp: "350°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Frosted Pineapple Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Brown Sugar",
      "1/2 cup Shortening",
      "1 Egg",
      "3/4 cup drained Crushed Pineapple (reserve juice)",
      "2 cups sifted Flour",
      "1/4 tsp Baking Soda",
      "1 3/4 tsp Baking Powder",
      "1/4 tsp Salt",
      "1 tsp Vanilla",
      "1/2 cup chopped Nuts",
      "Frosting: 2 cups Icing Sugar",
      "Frosting: 3 Tbsp melted Butter",
      "Frosting: 1 Tbsp Vanilla",
      "Frosting: Pineapple Juice as needed"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Cream shortening and brown sugar, then add beaten egg.",
      "Stir in drained pineapple.",
      "Sift flour, baking soda, baking powder, and salt; add to first mixture.",
      "Add vanilla and nuts.",
      "Drop by teaspoonfuls on a greased cookie sheet and bake 10–12 minutes at 375°F.",
      "For frosting, mix icing sugar, melted butter, vanilla, and enough pineapple juice to make a spreadable icing; frost cooled cookies."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "12 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Corn Flake Cookies (Janette)",
    category: Category.DESSERTS,
    ingredients: [
      "3/4 cup Shortening",
      "3/4 cup Brown Sugar",
      "1 Egg",
      "1/2 tsp Vanilla",
      "1/2 tsp Baking Soda",
      "1 1/2 cups Flour",
      "1/2 tsp Salt",
      "Crushed Cornflakes for rolling"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream shortening and brown sugar.",
      "Beat in egg and vanilla.",
      "Stir in baking soda, flour, and salt to form dough.",
      "Roll dough into balls and then roll in crushed Cornflakes.",
      "Place on cookie sheet and bake 15–18 minutes at 350°F."
    ],
    addedBy: "Janette",
    temp: "350°F",
    cookTime: "18 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Peanut Butter Oatmeal Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Butter",
      "1 cup White Sugar",
      "1/2 cup Brown Sugar",
      "1 Egg",
      "1/4 cup Milk",
      "1/2 tsp Baking Soda",
      "2 1/2 cups Rolled Oats",
      "1/2 cup Raisins",
      "1/2 cup Peanut Butter",
      "Salt",
      "Vanilla"
    ],
    instructions: [
      "Preheat oven to 350°F and grease cookie sheets.",
      "Cream butter and sugars; add peanut butter and egg.",
      "Add baking soda, salt, vanilla, then milk.",
      "Stir in raisins and rolled oats; note this recipe contains no flour.",
      "Drop by spoonfuls onto cookie sheet and bake about 7 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "7 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chocolate Chip Cookies (Donnetta's)",
    category: Category.DESSERTS,
    ingredients: [
      "2 1/2 cups Flour",
      "1 tsp Salt",
      "1 tsp Baking Soda",
      "1 cup Butter",
      "3/4 cup Brown Sugar, packed",
      "2/3 cup White Sugar",
      "2 Eggs",
      "1 tsp Vanilla",
      "1 (12 oz) pkg Chocolate Chips"
    ],
    instructions: [
      "Preheat oven to 375°F and grease cookie sheets.",
      "Cream butter with brown and white sugars.",
      "Beat in eggs and vanilla for about 2 minutes.",
      "Stir in flour mixed with salt and baking soda.",
      "Fold in chocolate chips.",
      "Drop by rounded teaspoons on cookie sheet and bake 8–10 minutes."
    ],
    addedBy: "Donetta",
    temp: "375°F",
    cookTime: "10 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Shirley's Doughnuts",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups White Sugar",
      "3 Eggs",
      "1/2 tsp Mace",
      "1/2 tsp Nutmeg",
      "1/2 tsp Cinnamon",
      "1 Tbsp melted Lard",
      "1/2 tsp Salt",
      "2 cups Milk",
      "6 cups Flour",
      "8 tsp Baking Powder"
    ],
    instructions: [
      "Combine sugar and eggs, then add spices and salt.",
      "Mix in melted lard and milk.",
      "Gradually add flour and baking powder to make a soft dough suitable for rolling.",
      "Roll out on a floured surface, cut doughnuts, and fry in deep fat at 375°F until golden brown."
    ],
    addedBy: "Shirley",
    temp: "375°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Bran Muffins (Carolyn Ross)",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "Part 1: 2 cups Bran Buds",
      "Part 1: 2 cups boiling Water",
      "Part 2: 1 cup Crisco",
      "Part 2: 4 Eggs",
      "Part 2: 3 cups Sugar",
      "Part 2: 1 qt Buttermilk",
      "Part 2: 5 cups Flour",
      "Part 2: 5 tsp Baking Soda (heaping)",
      "Part 2: 1 tsp Salt",
      "Part 2: 4 cups Bran",
      "Part 2: 2 cups Raisins or Dates"
    ],
    instructions: [
      "Mix Part 1 ingredients (Bran Buds and boiling water) and set aside to cool.",
      "In a large bowl, cream Crisco, eggs, and sugar.",
      "Add buttermilk, flour, baking soda, salt, bran, and raisins or dates; mix well.",
      "Stir in cooled Bran Bud mixture.",
      "Refrigerate batter overnight; it keeps in the fridge for a few weeks.",
      "Bake muffins at 350°F until done (about 15–20 minutes depending on size)."
    ],
    addedBy: "Carolyn",
    temp: "350°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Fermipan Yeast Buns",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "4 cups Flour",
      "2 Tbsp Fermipan Yeast",
      "1/2 cup Sugar",
      "3 cups Lukewarm Water",
      "1/2 cup Oil",
      "2 Eggs",
      "1 tsp Salt"
    ],
    instructions: [
      "Mix 4 cups flour and yeast in a large bowl.",
      "Beat eggs and add sugar, oil, salt, and water.",
      "Mix wet ingredients into flour to make a soft dough, adding more flour if necessary.",
      "Let rise 15 minutes; punch down.",
      "Let rise another 15 minutes; punch down and put in muffin pans.",
      "Let rise 1 hour and bake at 325°F for 10–15 minutes."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Blueberry Muffins",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1 1/2 cups Flour",
      "2 1/2 tsp Baking Powder",
      "1/2 tsp Salt",
      "1/2 cup Butter",
      "1/2 cup White Sugar",
      "1 Egg, lightly beaten",
      "1/2 cup Milk",
      "2 cups Blueberries"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Coat blueberries with 1/2 cup of the flour.",
      "Cream butter and sugar; beat in egg.",
      "Combine remaining 1 cup flour with baking powder and salt.",
      "Add dry ingredients alternately with milk to creamed mixture.",
      "Fold in blueberries and spoon into muffin tins.",
      "Bake for about 20 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Carrot & Pineapple Muffins",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1 2/3 cups Flour",
      "1 cup White Sugar",
      "1 tsp Baking Soda",
      "1 1/2 tsp Baking Powder",
      "1 tsp Cinnamon",
      "1/2 tsp Salt",
      "1/2 cup Salad Oil",
      "2 Eggs, beaten",
      "2/3 cup Crushed Pineapple with Juice",
      "1 tsp Vanilla",
      "1 cup grated raw Carrots"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "In a mixing bowl, combine flour, sugar, baking soda, baking powder, cinnamon, salt, and grated carrot.",
      "Add eggs, oil, vanilla, and pineapple with juice; mix just until combined.",
      "Fill muffin tins and bake about 20 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Donnetta's Pizza Dough",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1/2 cup Warm Water",
      "1 tsp Sugar",
      "1 pkg Yeast",
      "1 cup Warm Milk",
      "1/2 cup Oil",
      "1 Egg, beaten",
      "1 tsp Sugar",
      "1/2 tsp Salt",
      "About 4 cups Flour"
    ],
    instructions: [
      "Sprinkle yeast on warm water mixed with 1 tsp sugar and let stand until foamy.",
      "In a larger bowl, combine warm milk, oil, beaten egg, sugar, and salt.",
      "Stir in activated yeast and add flour, mixing first with a fork then with hands to make a soft dough.",
      "Let rise about 1 hour before shaping into pizza crusts."
    ],
    addedBy: "Donetta",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Mincemeat (Large Batch)",
    category: Category.SAUCES,
    ingredients: [
      "38 Apples, chopped",
      "2 (750 g) pkgs Raisins",
      "5 lbs Meat, cooked and chopped",
      "2 cups Meat Juice",
      "2 cups Molasses",
      "2 cups Vinegar",
      "4 cups Brown Sugar"
    ],
    instructions: [
      "Combine chopped apples, raisins, cooked chopped meat, meat juice, molasses, vinegar, and brown sugar in a large pot.",
      "Simmer until mixture is thickened and flavors are blended, stirring often to prevent sticking.",
      "Pour hot mincemeat into sterilized quart jars; seal.",
      "Yields approximately 17 quart bottles plus 4 extra quarts."
    ],
    addedBy: "Family",
    description: "Large-batch traditional mincemeat for pies and tarts.",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Rice Pudding (Microwave)",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Sugar",
      "3 Tbsp Cornstarch",
      "Pinch Salt",
      "2 cups Milk",
      "2 Eggs",
      "1/2 cup Raisins",
      "1 Tbsp Butter",
      "1 tsp Vanilla",
      "3 cups cooked White Rice"
    ],
    instructions: [
      "In a large microwave-safe bowl, mix sugar, cornstarch, and salt.",
      "Gradually stir in milk until smooth.",
      "Microwave uncovered on HIGH for about 8 minutes, stirring often, until thickened.",
      "In a separate bowl, beat eggs; stir a little of the hot mixture into the eggs, then return egg mixture to the main bowl, stirring well.",
      "Stir in raisins and microwave on MED-HIGH for about 4 minutes or until smooth and thick.",
      "Stir in butter, vanilla, and cooked white rice.",
      "Serve warm or chilled."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Drumstick Square",
    category: Category.DESSERTS,
    ingredients: [
      "Bottom: 1 1/2 cups Graham Crumbs",
      "Bottom: 1/2 cup Nuts (optional)",
      "Bottom: 1/4 cup Margarine, melted",
      "Bottom: 3 tsp Peanut Butter",
      "Top: 250 g Cream Cheese",
      "Top: 1/2 cup Icing Sugar",
      "Top: 1/2 cup Peanut Butter",
      "Top: 1 tsp Vanilla",
      "Top: 3 Eggs",
      "Top: 1 large tub Cool Whip",
      "Top: Chocolate Sundae Sauce",
      "Optional Nuts for garnish"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix graham crumbs, nuts (if using), melted margarine, and peanut butter; press into a 9x13 inch pan.",
      "Bake crust for 5 minutes at 350°F; cool slightly.",
      "In a large bowl, beat cream cheese, icing sugar, peanut butter, vanilla, and eggs at high speed until smooth.",
      "Fold in Cool Whip and spread over cooled crust.",
      "Drizzle with chocolate sundae sauce and sprinkle with nuts if desired.",
      "Cut through with a knife to marble slightly.",
      "Freeze 4–5 hours before serving; keeps up to 6 months in the freezer."
    ],
    addedBy: "Family",
    temp: "350°F",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Rice Krispies Squares",
    category: Category.DESSERTS,
    ingredients: [
      "1/4 cup Butter or Margarine",
      "4 cups Marshmallows",
      "1/2 tsp Vanilla",
      "5 cups Rice Krispies Cereal"
    ],
    instructions: [
      "In a large saucepan over low heat, melt butter.",
      "Add marshmallows and stir until melted and well blended; remove from heat.",
      "Stir in vanilla.",
      "Add Rice Krispies and stir until evenly coated.",
      "Using a lightly buttered spatula, press mixture into a greased 13x9 inch pan.",
      "Cool completely, then cut into squares."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Hash Brown Casserole",
    category: Category.SIDE_DISHES,
    ingredients: [
      "1 large bag Frozen Hash Browns (partly thawed)",
      "1 can Cream of Mushroom Soup",
      "1 (250 ml) container Sour Cream",
      "1 Onion, finely chopped",
      "1/2 cup Margarine, melted",
      "1 cup grated Cheddar Cheese",
      "Parmesan Cheese for topping"
    ],
    instructions: [
      "Preheat oven to 350°F and grease a 9x13 inch pan.",
      "Partly thaw hash browns and place in a large bowl.",
      "Add cream of mushroom soup and sour cream and mix well.",
      "Stir in finely chopped onion, melted margarine, and grated cheddar cheese.",
      "Spread mixture evenly in the prepared pan.",
      "Sprinkle Parmesan cheese on top.",
      "Bake at 350°F for about 1 hour, until hot and bubbly and lightly browned on top."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Black & White Brownies",
    category: Category.DESSERTS,
    ingredients: [
      "1/3 cup Butter",
      "1 cup Sugar",
      "2 Eggs",
      "1 cup Flour",
      "1/2 tsp Baking Powder",
      "1/2 cup Coconut",
      "1 tsp Vanilla",
      "2 squares Chocolate, melted"
    ],
    instructions: [
      "Preheat oven to 350°F and grease an 8x8 inch pan.",
      "Cream butter and sugar together, then beat in eggs.",
      "Stir in flour and baking powder until combined.",
      "Add coconut and vanilla and mix well.",
      "Divide batter in half; stir melted chocolate into one half.",
      "Drop spoonfuls of plain and chocolate batters alternately into the prepared pan.",
      "Bake for about 20 minutes at 350°F or until set.",
      "Cool before cutting into squares."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Peanut Butter Cake",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Sugar",
      "1/4 cup Butter",
      "1/4 cup Peanut Butter",
      "1 Egg, well beaten",
      "1 tsp Vanilla",
      "1 1/2 cups Flour",
      "1 tsp Salt",
      "1 tsp Baking Soda",
      "1 cup Sour Milk",
      "Frosting: 1/8 cup Peanut Butter",
      "Frosting: 1 Tbsp melted Butter",
      "Frosting: about 1 1/2 cups Icing Sugar",
      "Frosting: Milk as needed"
    ],
    instructions: [
      "Preheat oven to 375°F and grease a cake pan.",
      "Cream sugar, butter, and peanut butter together until smooth.",
      "Beat in egg and vanilla.",
      "Combine flour, salt, and baking soda, then add to creamed mixture alternately with sour milk, mixing just until combined.",
      "Pour batter into prepared pan and bake at 375°F for about 40 minutes or until a tester comes out clean.",
      "For frosting, blend peanut butter, melted butter, and icing sugar, adding a little milk at a time until smooth and spreadable.",
      "Frost cooled cake."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "40 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Mom's Jelly Roll (Alberta)",
    category: Category.DESSERTS,
    ingredients: [
      "4 Eggs, beaten",
      "1 cup White Sugar",
      "3 tsp Milk",
      "1/2 tsp Baking Soda dissolved in 3 tsp Cold Water",
      "2 tsp Baking Powder",
      "1 cup Flour",
      "Jam for filling"
    ],
    instructions: [
      "Preheat oven to 350°F and line a 9x12 inch jelly roll pan with greased wax paper.",
      "Beat eggs and sugar together until thick and light.",
      "Beat in milk and dissolved baking soda.",
      "Sift baking powder with flour and fold into egg mixture.",
      "Spread batter evenly in prepared pan and bake about 20 minutes at 350°F.",
      "Turn hot cake out onto a damp tea towel, peel off paper, spread with jam, and roll up tightly while still warm.",
      "Cool and dust with icing sugar if desired."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Raisin Cookies",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Raisins",
      "1 cup Boiling Water",
      "1 cup Shortening",
      "2 cups White Sugar",
      "3 Eggs",
      "1 tsp Vanilla",
      "4 cups Flour",
      "1 tsp Baking Powder",
      "1 tsp Baking Soda",
      "1/2 tsp Salt",
      "1 1/2 tsp Cinnamon",
      "1/2 tsp Nutmeg"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Cook raisins in boiling water for 5 minutes; cool slightly.",
      "Cream shortening, sugar, eggs, and vanilla.",
      "Combine flour, baking powder, baking soda, salt, cinnamon, and nutmeg.",
      "Add dry ingredients to creamed mixture alternately with the warm raisin mixture.",
      "Drop by spoonfuls onto cookie sheets and bake 10–12 minutes at 325°F."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "12 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chocolate Chip Cookies (Classic)",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Margarine",
      "3/4 cup Brown Sugar",
      "2/3 cup White Sugar",
      "2 Eggs",
      "1 tsp Vanilla",
      "2 1/2 cups Flour",
      "1 tsp Baking Soda",
      "1 pkg Chocolate Chips"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream margarine with brown and white sugars.",
      "Beat in eggs and vanilla.",
      "Stir in flour and baking soda until combined, then fold in chocolate chips.",
      "Drop by spoonfuls onto cookie sheets and bake 10–15 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Pork Chops Creole",
    category: Category.MAIN_DISHES,
    ingredients: [
      "6 Pork Chops",
      "1 cup diced Celery",
      "1 medium Onion (about 1/2 cup), chopped",
      "2 tsp Chili Powder",
      "1 can Red Kidney Beans",
      "1 can Kernel Corn (12 oz)",
      "1 cup Regular Rice (uncooked)",
      "1 can Tomato Soup",
      "1 soup can Water",
      "1 1/2 tsp Salt",
      "1 tsp dried Oregano, crumbled",
      "1/4 tsp Pepper"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Brown pork chops in a skillet; remove and set aside, draining all but about 2 Tbsp drippings.",
      "Sauté celery and onion in drippings; stir in chili powder and cook 1 minute.",
      "Stir in kidney beans with liquid, corn with liquid, rice, tomato soup, water, salt, oregano, and pepper; mix well.",
      "Bring mixture to a boil, then pour into a greased 12-cup shallow casserole.",
      "Arrange browned pork chops on top, cover, and bake about 1 hour at 350°F or until rice and chops are tender."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Lasagna (Family Style)",
    category: Category.MAIN_DISHES,
    ingredients: [
      "10 large Lasagna Noodles",
      "1–1 1/2 lbs Ground Beef",
      "1 Onion, chopped",
      "1/4 tsp Garlic Salt",
      "1 tsp Oregano",
      "Salt and Pepper",
      "1 Egg",
      "1 cup Cottage Cheese",
      "2 Tbsp Parmesan Cheese",
      "1 can Tomato Soup",
      "1 (6 oz) can Tomato Paste",
      "1 can Tomatoes",
      "1/2 lb sliced Mozzarella Cheese"
    ],
    instructions: [
      "Cook lasagna noodles in boiling salted water until tender (about 20 minutes); drain.",
      "Brown ground beef with onion, garlic salt, oregano, salt, and pepper; drain excess fat.",
      "In a bowl, mix egg, cottage cheese, and Parmesan cheese.",
      "Combine tomatoes, tomato soup, and tomato paste with the cooked beef mixture.",
      "In a 9x13 inch pan, place a layer of meat sauce, then noodles, then meat sauce, then cottage cheese mixture; repeat layers, ending with meat sauce.",
      "Top with sliced mozzarella cheese.",
      "Bake at 375°F for about 20 minutes, until heated through and cheese is melted."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Quick French Omelette",
    category: Category.MAIN_DISHES,
    ingredients: [
      "6 large Eggs",
      "2 Tbsp Water or Tomato Juice",
      "Dash Pepper",
      "Seasoned Salt to taste",
      "Salad Oil for pan",
      "Optional Fillings: herbs, chopped chives or parsley, rosemary, paprika"
    ],
    instructions: [
      "Preheat a 10-inch frying pan to about 380–400°F (a drop of water should dance).",
      "Beat eggs lightly with water or tomato juice, seasoned salt, and pepper; do not beat frothy.",
      "Add enough salad oil to coat bottom and sides of pan.",
      "Pour egg mixture into hot pan and cook until eggs are just set but still creamy, spreading evenly as needed.",
      "Add desired fillings, fold, and slide onto a warm plate.",
      "Keep warm in a low oven if making multiple omelettes."
    ],
    addedBy: "Family",
    cookTime: "1–2 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Macaroni Salad (Salmon)",
    category: Category.SOUPS_SALADS,
    ingredients: [
      "3 cups cooked Macaroni",
      "Salt, Pepper, Garlic Powder to season macaroni",
      "3 Hard-cooked Eggs, chopped",
      "1 can Salmon, drained",
      "1 Onion, chopped",
      "Chopped Celery",
      "Miracle Whip to moisten"
    ],
    instructions: [
      "Season hot cooked macaroni with salt, pepper, and a little garlic powder.",
      "Chop hard-cooked eggs and mix with macaroni.",
      "Add drained salmon, chopped onion, and chopped celery.",
      "Stir in enough Miracle Whip to moisten to desired creaminess.",
      "Chill before serving."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Calico Beans (Laurie)",
    category: Category.SIDE_DISHES,
    ingredients: [
      "1 Onion, chopped",
      "1 lb Bacon, cooked and crumbled",
      "3/4 cup Brown Sugar",
      "1/3 cup Vinegar",
      "1 1/2 tsp Dry Mustard",
      "1 can Kidney Beans",
      "1 can Lima Beans",
      "1 can Chickpeas",
      "1 can Brown Beans"
    ],
    instructions: [
      "Cook bacon until crisp; crumble and set aside.",
      "In a saucepan, simmer onion, brown sugar, vinegar, and dry mustard until onion is tender.",
      "Place drained beans in a casserole dish, add bacon, and pour sauce over beans; mix well.",
      "Cover and bake at 350°F for about 1 hour."
    ],
    addedBy: "Laurie",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Saucy Chicken & Asparagus",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1 1/2 lbs fresh Asparagus Spears, halved",
      "4 Boneless Skinless Chicken Breasts",
      "2 Tbsp Cooking Oil",
      "1/2 tsp Salt",
      "1/4 tsp Pepper",
      "1 can Condensed Cream of Chicken Soup (undiluted)",
      "1/2 cup Mayonnaise",
      "1 tsp Lemon Juice",
      "1/2 tsp Curry Powder",
      "1 cup shredded Cheddar Cheese (about 4 oz)"
    ],
    instructions: [
      "Preheat oven to 375°F and grease a 9-inch square baking dish.",
      "Place asparagus in the bottom of the dish.",
      "In a skillet over medium heat, brown chicken breasts in oil on both sides; season with salt and pepper.",
      "Arrange browned chicken over asparagus.",
      "In a bowl, mix soup, mayonnaise, lemon juice, and curry powder; pour over chicken.",
      "Cover and bake at 375°F for about 40 minutes or until chicken is tender.",
      "Sprinkle with cheddar cheese and let stand 5 minutes before serving."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "40 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Pineapple Spinach Salad",
    category: Category.SOUPS_SALADS,
    ingredients: [
      "1 can (20 oz) Pineapple Chunks, drained",
      "4 cups packed Spinach Leaves",
      "1/2 cup sliced Red Onion",
      "1/2 cup toasted sliced Almonds",
      "1/2 cup Italian Dressing"
    ],
    instructions: [
      "In a large bowl, toss pineapple chunks, spinach, red onion, and almonds.",
      "Pour Italian dressing over salad and toss to coat.",
      "Serve immediately."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Blueberry Strawberry Muffins",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "3 cups Flour",
      "1 1/2 cups White Sugar",
      "4 tsp Baking Powder",
      "2 cups Strawberries, chopped",
      "2/3 cup Vegetable Oil",
      "2 Eggs",
      "1 1/2 cups Blueberries"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Cream oil, sugar, and eggs together.",
      "Stir in baking powder and flour until just combined.",
      "Fold in strawberries and blueberries.",
      "Spoon into muffin tins and bake 20–25 minutes at 400°F."
    ],
    addedBy: "Family",
    temp: "400°F",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Hot Fudge Sauce",
    category: Category.SAUCES,
    ingredients: [
      "3/4 cup Corn Syrup",
      "1/2 cup Cocoa (not mix)",
      "Dash Salt",
      "1/3 cup Butter or Margarine",
      "1/2 tsp Vanilla"
    ],
    instructions: [
      "In a small saucepan, combine corn syrup, cocoa, and salt.",
      "Heat, stirring constantly, to boiling.",
      "Simmer for about 3 minutes; remove from heat.",
      "Stir in butter and vanilla until smooth.",
      "Serve warm over ice cream or pudding."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Whole Wheat Bread (Large Batch)",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "18–20 cups Flour (about half white, half whole wheat)",
      "2 Tbsp Salt",
      "1/2 cup lightly packed Brown Sugar",
      "1/2 cup Shortening",
      "2 envelopes Yeast",
      "1 tsp White Sugar",
      "1/2 cup Warm Water",
      "3 cups additional Warm Water"
    ],
    instructions: [
      "Dissolve yeast with 1 tsp white sugar in 1/2 cup warm water; let stand until foamy.",
      "Add about 3 cups warm water, salt, brown sugar, and shortening, and enough flour to make a soft dough, using a mixture of white and whole wheat flour.",
      "Knead, adding remaining flour as needed, until smooth and elastic.",
      "Place in greased bowl, cover, and let rise about 1 hour or until doubled.",
      "Punch down, shape into loaves, let rise again, and bake at 400°F for 20–35 minutes.",
      "Brush tops with butter or milk if desired."
    ],
    addedBy: "Family",
    temp: "400°F",
    cookTime: "35 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Spicy Stir Fry Chicken",
    category: Category.MAIN_DISHES,
    ingredients: [
      "3 Boneless Chicken Breasts",
      "1 small Onion, sliced",
      "1 small Green Pepper, chopped",
      "1 small Red Pepper, chopped",
      "1 can Mushrooms",
      "2 1/2 Tbsp Cornstarch",
      "1/2 cup Hot Ketchup",
      "1 tsp Cayenne Pepper",
      "1 can Chicken Broth",
      "3 Tbsp Soya Sauce",
      "3 Tbsp Brown Sugar",
      "Garlic to taste"
    ],
    instructions: [
      "Cut chicken into bite-size pieces.",
      "Stir-fry chicken with onion and peppers in a little oil until nearly cooked; add mushrooms.",
      "In a bowl, dissolve cornstarch in hot ketchup, then add chicken broth, soya sauce, brown sugar, cayenne pepper, and garlic; mix well.",
      "Pour sauce into pan with chicken and vegetables and cook, stirring, until sauce thickens and chicken is cooked through.",
      "Serve over rice."
    ],
    addedBy: "Family",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Molasses Cookies (Shirley)",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Flour",
      "2 tsp Baking Soda",
      "1/2 tsp Salt",
      "1 tsp Cinnamon",
      "1 tsp Ginger",
      "1/2 tsp Cloves",
      "1 cup Brown Sugar",
      "3/4 cup Butter",
      "1/4 cup Molasses",
      "1 Egg"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Cream butter and brown sugar; add egg, then molasses and mix well.",
      "Combine flour, baking soda, salt, cinnamon, ginger, and cloves; add to creamed mixture and mix thoroughly.",
      "Roll dough into balls and roll in white sugar.",
      "Bake 8–10 minutes at 375°F."
    ],
    addedBy: "Shirley",
    temp: "375°F",
    cookTime: "10 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Oatmeal Cookies (Mixed Add-ins)",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup soft Butter or Margarine",
      "1/2 cup Brown Sugar",
      "1/2 cup White Sugar",
      "1 Egg",
      "1 Tbsp Milk",
      "1 tsp Vanilla",
      "1 cup Flour (whole wheat or white)",
      "1/2 tsp Baking Powder",
      "1/2 tsp Baking Soda",
      "1/2 tsp Salt",
      "1 cup Oatmeal",
      "1/2 cup Raisins, Chocolate Chips, and Coconut (mixed)"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream butter and sugars; beat in egg, milk, and vanilla.",
      "Combine flour, baking powder, baking soda, and salt; add to creamed mixture.",
      "Stir in oatmeal and mixed add-ins.",
      "Drop by spoonfuls onto cookie sheet and bake 8–10 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "10 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Skor Toffee Chocolate Bars",
    category: Category.DESSERTS,
    ingredients: [
      "3/4 cup Margarine",
      "3/4 cup packed Brown Sugar",
      "1 1/2 cups Flour",
      "1 can Sweetened Condensed Milk",
      "2 Tbsp Margarine",
      "1 pkg Milk Chocolate Chips",
      "1 pkg Skor Toffee Bits"
    ],
    instructions: [
      "Preheat oven to 350°F and grease a 9x13 inch pan.",
      "Cream 3/4 cup margarine, brown sugar, and flour until well blended and mixture comes together.",
      "Press evenly into pan and bake 20–25 minutes or until light golden; cool slightly.",
      "In a heavy saucepan, heat condensed milk and 2 Tbsp margarine, stirring constantly for 5–10 minutes until thickened; spread over baked base.",
      "Bake an additional 12–15 minutes.",
      "Sprinkle chocolate chips over hot topping and bake 2 minutes more until shiny and soft; spread evenly.",
      "Sprinkle Skor toffee bits on top, pressing lightly into chocolate; cool completely before cutting."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "40 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Tangy Poppy Seed Fruit Salad",
    category: Category.SOUPS_SALADS,
    ingredients: [
      "1 can (20 oz) Pineapple Chunks, drained (reserve 1/4 cup juice)",
      "1 Orange, peeled and sectioned",
      "1 Kiwi, peeled and sliced",
      "1 cup Grapes",
      "1 cup Strawberries",
      "1/4 cup reserved Pineapple Juice",
      "1/4 tsp grated Lime Peel",
      "2 Tbsp Lime Juice",
      "1 Tbsp Honey",
      "1 tsp Poppy Seeds"
    ],
    instructions: [
      "In a large bowl, combine pineapple chunks, orange sections, kiwi slices, grapes, and strawberries.",
      "In a small cup, stir together reserved pineapple juice, lime peel, lime juice, honey, and poppy seeds.",
      "Pour dressing over fruit and toss gently.",
      "Chill before serving."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Macaroni with Beef & Tomato",
    category: Category.MAIN_DISHES,
    ingredients: [
      "3/4 lb Ground Beef",
      "1/2 cup chopped Onion",
      "1/2 cup chopped Celery",
      "1 can Italian-style Tomato Soup",
      "3/4 cup Water",
      "1/8 tsp Pepper",
      "3 cups cooked Elbow Macaroni",
      "Optional: 1/2 cup shredded Cheddar Cheese",
      "Optional: 5 1/2 oz can Tomato Paste"
    ],
    instructions: [
      "Cook ground beef with onion and celery in a large skillet; season to taste and drain excess fat.",
      "Stir in tomato soup, water, pepper, and cooked macaroni; heat thoroughly.",
      "For baked version, spoon mixture into an 8-cup casserole, top with cheddar cheese, and bake at 375°F for about 20 minutes.",
      "Optional: stir in tomato paste for a thicker sauce."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Zucchini Coconut Loaf",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1 Egg",
      "1/2 cup Oil",
      "1 cup Sugar",
      "1 cup grated Zucchini",
      "1/2 tsp Vanilla",
      "1 1/2 cups Flour",
      "1/2 tsp Baking Powder",
      "1 tsp Baking Soda",
      "1/2 tsp Salt",
      "3/4 tsp Cinnamon",
      "1/2 tsp Nutmeg",
      "1/2 cup Coconut",
      "1/2 cup Pecans",
      "1/2 cup Cranberries (soaked in boiling water then drained)"
    ],
    instructions: [
      "Preheat oven to 350°F and grease a loaf pan.",
      "Beat egg, oil, and sugar together.",
      "Stir in zucchini and vanilla.",
      "In another bowl, combine flour, baking powder, baking soda, salt, cinnamon, nutmeg, coconut, pecans, and drained cranberries.",
      "Mix dry ingredients into wet mixture just until combined.",
      "Pour into loaf pan and bake about 1 hour at 350°F, or until a tester comes out clean."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Florida Squares",
    category: Category.DESSERTS,
    ingredients: [
      "Base: 1/2 cup Almonds, chopped",
      "Base: 1/2 cup Flour",
      "Base: 1/4 cup Butter",
      "Base: 1 Tbsp Sugar",
      "Filling: 1 pouch Key Lime Pie Filling mix",
      "Filling: 1/2 cup Sugar",
      "Filling: 2 1/4 cups Water",
      "Filling: 2 Eggs",
      "Filling: 1 Tbsp Butter",
      "Topping: 1 cup prepared Dream Whip",
      "Topping: 1 (125 g) pkg Cream Cheese",
      "Topping: 1/2 cup Icing Sugar",
      "Topping: 1 cup toasted Coconut"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Combine almonds, flour, butter, and 1 Tbsp sugar for base; press into 8x8 inch pan and bake 15 minutes.",
      "In a saucepan, combine pie filling mix, 1/2 cup sugar, and 1/4 cup water.",
      "Beat eggs and blend into mixture; gradually stir in remaining water.",
      "Cook over medium heat, stirring, until mixture boils and thickens; remove from heat and stir in 1 Tbsp butter.",
      "Pour over baked base and cool.",
      "For topping, blend prepared Dream Whip with cream cheese on low speed, then gradually add icing sugar.",
      "Spread over lime filling and sprinkle with toasted coconut; chill at least 3 hours before serving."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Butter Tart Slice (Molly)",
    category: Category.DESSERTS,
    ingredients: [
      "Base: 1 1/2 cups Flour",
      "Base: 1/4 cup Brown Sugar",
      "Base: 1/2 cup Margarine",
      "Top: 1/3 cup Margarine",
      "Top: 1 cup Brown Sugar",
      "Top: 1 Egg",
      "Top: 1 Tbsp Cream",
      "Top: 1 Tbsp Flour",
      "Top: 1 cup Raisins"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Mix flour, brown sugar, and 1/2 cup margarine for base; press into pan and bake 10–15 minutes.",
      "For topping, cream 1/3 cup margarine with brown sugar, then beat in egg, cream, and flour; stir in raisins.",
      "Spread over baked base and bake 20–25 minutes at 350°F.",
      "Cool before cutting into squares."
    ],
    addedBy: "Molly",
    temp: "350°F",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Hurry Curry Chicken",
    category: Category.MAIN_DISHES,
    ingredients: [
      "1/4 cup Olive Oil",
      "1/4 cup Dijon Mustard",
      "1/3 cup Liquid Honey",
      "1 Tbsp Curry Powder",
      "3 lbs Chicken parts (cut up)"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Whisk together oil, mustard, honey, and curry powder in a shallow dish.",
      "Coat chicken pieces on both sides in mixture and place in a baking dish, meaty side down.",
      "Bake uncovered for about 45 minutes, turn chicken, and bake a further 15 minutes or until done.",
      "Serve over rice, with coleslaw if desired."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Gum Drop Cake",
    category: Category.DESSERTS,
    ingredients: [
      "1 cup Margarine",
      "2 cups White Sugar",
      "3 Eggs",
      "1 cup Milk",
      "3 1/2 cups Flour",
      "1 tsp Salt",
      "2 tsp Baking Powder",
      "Optional: 1 cup Raisins",
      "1/2 tsp Vanilla",
      "1 cup Gumdrops, chopped and floured"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Cream margarine and sugar; beat in eggs.",
      "Stir in milk and vanilla.",
      "Combine flour, salt, and baking powder; add to creamed mixture.",
      "Fold in raisins (if using) and floured gumdrops.",
      "Pour into 2 greased loaf pans and bake about 1 1/2 hours at 350°F, until a tester comes out clean."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "1.5 hours",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Christmas Pudding (Steamed)",
    category: Category.DESSERTS,
    ingredients: [
      "2 1/2 cups Flour",
      "1 1/2 tsp Baking Soda",
      "1/4 tsp Salt",
      "3/4 cup Currants",
      "1/2 cup Walnuts",
      "1 tsp Cinnamon",
      "1/2 cup Candied Fruit",
      "3/4 cup Soft Margarine",
      "3/4 cup Molasses",
      "1 cup Sour Milk",
      "3/4 cup Raisins",
      "1/2 tsp Nutmeg",
      "1/2 tsp Cloves",
      "2 Eggs"
    ],
    instructions: [
      "Sift flour, baking soda, and salt together 3 times.",
      "Cream margarine, then add molasses and sour milk.",
      "Stir in raisins, currants, walnuts, candied fruit, cinnamon, nutmeg, and cloves.",
      "Add flour mixture and beaten eggs; beat well.",
      "Turn into greased molds (2/3 full).",
      "Steam for 3 hours in a covered pot or Dutch oven.",
      "Serve warm with sauce."
    ],
    addedBy: "Family",
    cookTime: "3 hours (steam)",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Butterscotch Tropics",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Butter",
      "1/2 cup Peanut Butter",
      "1 Egg",
      "2/3 cup Icing Sugar",
      "1 pkg (3 1/2 oz) Butterscotch Pudding mix (dry)",
      "4 cups Rice Krispies",
      "1 cup Coconut",
      "1/2 cup Walnuts"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Cream butter and peanut butter; blend in icing sugar and dry pudding mix.",
      "Stir in Rice Krispies, coconut, and walnuts.",
      "Drop by spoonfuls onto baking sheet and bake about 8 minutes at 375°F.",
      "Cool on racks."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "8 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Strawberry Jello Cheesecake",
    category: Category.DESSERTS,
    ingredients: [
      "Crust: 1 cup Flour",
      "Crust: 1/2 cup Margarine",
      "Crust: 1 Tbsp White Sugar",
      "Crust: 1/8 tsp Salt",
      "Layer: 2 cups Strawberries",
      "Layer: 1/2 cup Sugar",
      "Layer: 1 pkg Strawberry Jello",
      "Topping: 4 oz Cream Cheese",
      "Topping: 1/3 cup Icing Sugar",
      "Topping: 1 small tub Cool Whip (or Nutriwhip + 1/2 cup Milk + 1 tsp Vanilla)"
    ],
    instructions: [
      "Preheat oven to 350°F and grease a 9x9 inch pan.",
      "Mix flour, margarine, sugar, and salt; press into pan and bake 15 minutes; cool.",
      "In a pot, combine strawberries, sugar, and jello; heat, stirring, until jello dissolves but do not boil.",
      "Pour strawberry mixture over crust and refrigerate about 2 hours until set.",
      "Beat cream cheese with icing sugar, then fold in Cool Whip (or prepared whipped topping).",
      "Spread over jello layer and chill until serving."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Millionaire Squares",
    category: Category.DESSERTS,
    ingredients: [
      "20–30 Dad's Oatmeal Cookies, crushed",
      "1/3 cup melted Margarine",
      "1/2 cup Margarine",
      "6 oz pkg Semi-sweet Butterscotch Chips",
      "2 cups Icing Sugar",
      "1 Egg",
      "1 tsp Vanilla"
    ],
    instructions: [
      "Preheat oven to 375°F and butter a 9 inch square pan.",
      "Mix crushed cookies with 1/3 cup melted margarine; press 3/4 of mixture into pan and bake 5–8 minutes.",
      "Melt 1/2 cup margarine with butterscotch chips; cool slightly.",
      "Stir in icing sugar, egg, and vanilla until smooth.",
      "Spread over cooled base and top with remaining crumbs.",
      "Refrigerate until firm; freezes well."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "8 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Mustard-Broiled Mackerel",
    category: Category.MAIN_DISHES,
    ingredients: [
      "Mackerel Fillets",
      "2 Tbsp melted Butter or Margarine",
      "2 Tbsp chopped Parsley",
      "1 tsp Salt",
      "Few grains Pepper",
      "1 tsp prepared Mustard",
      "1/8 tsp Dill Seed",
      "1 Tbsp Lemon Juice",
      "Lemon Slices or additional Lemon Juice"
    ],
    instructions: [
      "Rinse and dry mackerel fillets and place skin side down on a greased broiler pan or grill-safe tray.",
      "Mix half the melted butter with parsley, salt, and pepper and brush fillets well.",
      "Broil about 5 minutes.",
      "Combine remaining butter with mustard, dill seed, and lemon juice; pour over fillets.",
      "Broil or grill about 5 minutes longer or until fish flakes easily with a fork.",
      "Serve with lemon slices."
    ],
    addedBy: "Family",
    cookTime: "10 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Cocoa Balls (No-Bake)",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups White Sugar",
      "1/2 cup Cocoa",
      "1/2 cup Milk",
      "1/2 cup Shortening",
      "2 cups Rolled Oats",
      "1 cup Coconut",
      "1 tsp Vanilla",
      "1/4 tsp Salt"
    ],
    instructions: [
      "In a saucepan, mix sugar, cocoa, milk, and shortening.",
      "Bring to a boil and cook for about 2 minutes, stirring.",
      "Remove from heat and stir in oats, coconut, vanilla, and salt.",
      "Drop by spoonfuls onto waxed paper and let set until firm."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Christmas Fruit Cake (Large Batch)",
    category: Category.DESSERTS,
    ingredients: [
      "4 lbs seedless Raisins",
      "2 lbs Cherries",
      "2 lbs Dates, chopped",
      "3 cups Butter (part Shortening)",
      "2 tsp each Vanilla, Lemon, and Almond Extract",
      "5 1/3 cups Brown Sugar",
      "10 Egg Yolks",
      "8 cups sifted Flour",
      "1 tsp Baking Soda",
      "1 lb Pineapple",
      "1 tsp Cinnamon",
      "1 tsp Nutmeg",
      "1/2 tsp Cloves",
      "1 cup Sour Milk",
      "10 Egg Whites",
      "Juice and Rind of 1 Lemon",
      "Juice from jar of Cherries"
    ],
    instructions: [
      "Reserve about 2 cups of the flour to coat the fruit.",
      "Cream butter/shortening until soft, gradually adding sugar and beating until light and fluffy.",
      "Add egg yolks and extracts and mix well.",
      "Sift remaining flour with baking soda, cinnamon, nutmeg, and cloves; add alternately with sour milk.",
      "Beat egg whites until stiff but not dry and fold into batter.",
      "Flour the fruits with reserved flour and fold into batter along with lemon juice, rind, and cherry juice.",
      "Spoon into prepared pans and bake at 275°F for a little more than 3 hours, or until done.",
      "Brush with rum or wine if desired while still warm."
    ],
    addedBy: "Family",
    temp: "275°F",
    cookTime: "3+ hours",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Old-Fashioned Fudge",
    category: Category.DESSERTS,
    ingredients: [
      "3 cups Brown Sugar",
      "1 cup White Sugar",
      "1/2 tsp Salt",
      "1 cup Evaporated Milk",
      "2 Tbsp Butter",
      "1 tsp Vanilla"
    ],
    instructions: [
      "In a saucepan, stir together brown sugar, white sugar, salt, milk, and butter.",
      "Cook over medium heat, stirring, until mixture reaches soft-ball stage (about 236°F).",
      "Remove from heat and cool without stirring until lukewarm.",
      "Beat until fudge loses its gloss, then stir in vanilla.",
      "Pour into a buttered 9-inch square pan and refrigerate until firm; cut into squares."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Banana Bread",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1/4 cup Shortening",
      "1 cup Brown Sugar",
      "1 Egg (large)",
      "4 large Bananas, mashed",
      "1 1/2 cups Flour",
      "1 tsp Baking Soda",
      "1 tsp Baking Powder",
      "1 tsp Salt"
    ],
    instructions: [
      "Preheat oven to 300°F and grease a loaf pan.",
      "Cream shortening and brown sugar; beat in egg.",
      "Stir in mashed bananas.",
      "Sift together flour, baking soda, baking powder, and salt; add to banana mixture and blend.",
      "Pour into loaf pan and bake about 45 minutes at 300°F, or until a tester comes out clean."
    ],
    addedBy: "Family",
    temp: "300°F",
    cookTime: "45 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Aunt Jennie's Biscuits",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "5 cups Flour",
      "10 tsp Baking Powder",
      "3/4 cup White Sugar",
      "1 tsp Salt",
      "1/2 cup Raisins",
      "3/4 cup Shortening (a little more if needed)",
      "Water to mix"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Combine flour, baking powder, sugar, salt, and raisins.",
      "Cut in shortening until mixture resembles coarse crumbs.",
      "Add enough water to make a soft dough.",
      "Roll out on a floured board and cut with a glass or biscuit cutter.",
      "Bake about 15 minutes at 375°F until lightly browned."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "15 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Quickie's Orange Corn Muffins",
    category: Category.BREADS_MUFFINS,
    ingredients: [
      "1 cup Quaker Oats",
      "1/2 cup Orange Juice",
      "Grated rind of 1 Orange",
      "1/2 cup Boiling Water",
      "1/2 cup melted Margarine",
      "1/2 cup Brown Sugar",
      "1/2 cup White Sugar",
      "2 Eggs",
      "1 cup Raisins",
      "1 1/4 cups Flour",
      "1 tsp Baking Powder",
      "1 tsp Baking Soda",
      "1 tsp Salt",
      "1 tsp Vanilla"
    ],
    instructions: [
      "Preheat oven and prepare muffin tins.",
      "Soak oats in orange juice and boiling water for 15 minutes.",
      "Add orange rind, eggs, and raisins.",
      "Combine melted margarine with brown and white sugars, then add to oat mixture.",
      "Stir in flour, baking powder, baking soda, salt, and vanilla just until combined.",
      "Bake about 20 minutes or until done."
    ],
    addedBy: "Family",
    cookTime: "20 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Chocolate Brownies (Simple)",
    category: Category.DESSERTS,
    ingredients: [
      "1/2 cup Margarine",
      "1 cup White Sugar",
      "1 tsp Vanilla",
      "2 Eggs",
      "3 Tbsp Cocoa",
      "1/2 cup Flour"
    ],
    instructions: [
      "Preheat oven to 325°F and grease an 8x8 inch pan.",
      "Cream margarine and sugar; beat in vanilla and eggs.",
      "Stir in cocoa and flour.",
      "Spread in pan and bake about 25 minutes at 325°F."
    ],
    addedBy: "Family",
    temp: "325°F",
    cookTime: "25 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Easter Cake",
    category: Category.DESSERTS,
    ingredients: [
      "6 large Eggs",
      "1 cup Sugar",
      "1/2 tsp Almond Extract",
      "1 cup sifted Flour",
      "6 Tbsp melted Butter"
    ],
    instructions: [
      "Preheat oven to 350°F and prepare a tube pan.",
      "Beat eggs over hot water for 5 minutes.",
      "Gradually add sugar, continuing to beat 15–20 minutes until tripled in volume.",
      "Fold in almond extract and flour gently.",
      "Fold in melted butter.",
      "Pour into pan and bake about 35 minutes at 350°F."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "35 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Aunt Jennie's Pudding (Steamed)",
    category: Category.DESSERTS,
    ingredients: [
      "2 1/2 cups Flour",
      "1/2 tsp Baking Soda",
      "3 tsp Baking Powder",
      "1/2 tsp Salt",
      "1/2 tsp Nutmeg",
      "1/2 tsp Cinnamon",
      "3/4 cup Shortening or Margarine",
      "1/2 cup Currants",
      "1 cup Raisins",
      "1 cup Molasses",
      "1 cup Milk"
    ],
    instructions: [
      "Mix flour, baking soda, baking powder, salt, nutmeg, and cinnamon.",
      "Cream shortening or margarine.",
      "Add molasses, milk, raisins, and currants.",
      "Stir in dry ingredients until combined.",
      "Pour into a greased 48 oz juice can or pudding mold.",
      "Steam for 3 hours and serve with brown sugar sauce."
    ],
    addedBy: "Family",
    cookTime: "3 hours (steam)",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Fresh Berry Pie",
    category: Category.DESSERTS,
    ingredients: [
      "Pastry for 9-inch Double-Crust Pie",
      "3/4 cup Granulated Sugar",
      "1/4 cup All-purpose Flour",
      "Pinch Salt",
      "4 1/4 cups Berries (mixed)",
      "1 Tbsp Butter or Margarine"
    ],
    instructions: [
      "Preheat oven to 450°F.",
      "Prepare pastry; line a 9-inch pie plate with bottom crust and trim; roll out top crust.",
      "Mix sugar, flour, and salt; combine with berries.",
      "Turn berry mixture into pastry-lined plate and dot with butter.",
      "Cover with top crust, seal, and cut vents.",
      "Bake at 450°F for 15 minutes, then reduce heat to 350°F and bake 50–55 minutes longer or until filling is thickened and bubbly."
    ],
    addedBy: "Family",
    temp: "450°F then 350°F",
    cookTime: "1 hour",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Ultimate Chocolate Cake (or Muffins)",
    category: Category.DESSERTS,
    ingredients: [
      "1 3/4 cups Flour",
      "2 cups Sugar",
      "3/4 cup Cocoa",
      "1 1/2 tsp Baking Soda",
      "1 1/2 tsp Baking Powder",
      "1 tsp Salt",
      "2 Eggs",
      "1 cup Milk",
      "1/2 cup Oil",
      "1 cup Boiling Water",
      "Optional: Chocolate Chips for muffin tops"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Combine flour, sugar, cocoa, baking soda, baking powder, and salt.",
      "Beat in eggs, milk, and oil.",
      "Stir in boiling water (batter will be very thin).",
      "For cake, pour into prepared pans and bake 25–30 minutes or until done.",
      "For muffins, fill muffin cups and bake 10–15 minutes at 350°F; sprinkle chocolate chips on top before baking."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "30 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Orange Pineapple Squares",
    category: Category.DESSERTS,
    ingredients: [
      "Base: 1 1/2 cups Graham Wafer Crumbs",
      "Base: 2 Tbsp Sugar",
      "Base: 1/2 cup melted Butter",
      "Top: 1 (19 oz) can Crushed Pineapple",
      "Top: 1 pkg Orange Jello",
      "Top: 1/2 cup White Sugar",
      "Top: 1 small tub Cool Whip"
    ],
    instructions: [
      "Preheat oven to 350°F and grease a 9x9 inch pan.",
      "Mix graham crumbs, sugar, and melted butter; press into pan and bake 8 minutes at 350°F; cool.",
      "In a saucepan, bring pineapple, jello, and sugar to a boil; cool completely.",
      "Fold in Cool Whip and spread over graham base.",
      "Chill until set before cutting."
    ],
    addedBy: "Family",
    temp: "350°F",
    cookTime: "8 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "French Fried Onion Rings",
    category: Category.SIDE_DISHES,
    ingredients: [
      "2 cups Milk",
      "3 Eggs",
      "1 cup Flour",
      "4–5 Onions",
      "Salt and Pepper to taste",
      "Additional Flour for coating",
      "Oil for deep frying"
    ],
    instructions: [
      "Beat together milk, eggs, salt, and pepper.",
      "Slice onions into 1/4-inch slices and separate into rings.",
      "Dip rings into milk mixture, then shake off excess and drop into a paper bag containing flour; shake to coat.",
      "Fry a few rings at a time in deep fat heated to 375°F until golden brown.",
      "Drain on paper towels and serve hot."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "5 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Speedy Tex Mex Bowl",
    category: Category.MAIN_DISHES,
    ingredients: [
      "3 cups cooked Long Grain Rice",
      "1/2 lb cooked Ground Beef (browned and drained)",
      "1 can Kidney Beans",
      "1 1/2 cups frozen Corn Kernels",
      "1 1/2 cups mild Salsa",
      "3/4 cup Cheddar Cheese, shredded"
    ],
    instructions: [
      "In a skillet, combine cooked beef, corn, and salsa; heat thoroughly.",
      "Stir in cooked rice and kidney beans.",
      "Serve in bowls topped with shredded cheddar cheese."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Minted Fruit Rice Salad",
    category: Category.SOUPS_SALADS,
    ingredients: [
      "2/3 cup Pineapple Juice",
      "1/3 cup Water",
      "1 cup Instant Rice",
      "1 can (11 oz) Mandarin Oranges, drained",
      "1 can (8 oz) Crushed Pineapple, undrained",
      "1/2 cup chopped Cucumber",
      "1/3 cup chopped Red Onion",
      "3 Tbsp chopped Fresh Mint"
    ],
    instructions: [
      "Heat pineapple juice and water to boiling; stir in instant rice.",
      "Remove from heat, cover, and let stand 10 minutes.",
      "Fluff rice and combine with mandarin oranges, crushed pineapple, cucumber, red onion, and mint in a bowl.",
      "Chill before serving."
    ],
    addedBy: "Family",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Raspberry Pinwheels (Ann Campbell)",
    category: Category.DESSERTS,
    ingredients: [
      "2 cups Flour",
      "1 tsp Baking Powder",
      "1/4 tsp Salt",
      "1/2 cup Margarine",
      "1 cup Sugar",
      "1 Egg",
      "1 tsp Vanilla",
      "Filling: 1/2 cup Raspberry Jam",
      "Filling: 1/2 cup Coconut",
      "Filling: 1/4 cup Pecans, chopped"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Prepare dough by combining flour, baking powder, and salt; cream margarine and sugar, then beat in egg and vanilla and add dry ingredients.",
      "Roll dough between two sheets of waxed paper to about 12x9 inches.",
      "Mix raspberry jam, coconut, and pecans for filling; spread over dough and roll up tightly.",
      "Chill overnight.",
      "Slice into 1/4-inch slices and bake 8–10 minutes at 350°F."
    ],
    addedBy: "Ann",
    temp: "350°F",
    cookTime: "10 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Waffles",
    category: Category.MAIN_DISHES,
    ingredients: [
      "2 1/4 cups Flour",
      "1 Tbsp Sugar",
      "2 1/2 tsp Baking Powder",
      "1/4 tsp Salt",
      "3 Eggs",
      "2 1/4 cups Milk",
      "2 Tbsp melted Margarine or Canola Oil"
    ],
    instructions: [
      "Whisk together flour, sugar, baking powder, and salt.",
      "Beat eggs with milk and melted margarine or oil.",
      "Stir wet ingredients into dry just until combined.",
      "Cook in a preheated waffle iron for about 3 minutes or until golden."
    ],
    addedBy: "Family",
    cookTime: "3 mins",
    timestamp: Date.now()
  },
  {
    id: generateId(),
    title: "Fruit Blossom Dessert",
    category: Category.DESSERTS,
    ingredients: [
      "2 pkgs (235 g each) Crescent Roll Dough",
      "1 Lemon (zest and juice)",
      "4 cups Frozen Whipped Topping (thawed)",
      "1/2 cup Icing Sugar",
      "2–3 Kiwis, peeled and sliced",
      "1 cup Fresh Strawberries",
      "1/2 can Mandarin Oranges, drained",
      "1/4 cup Blueberries",
      "Extra Icing Sugar for garnish"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Arrange crescent roll dough on a baking sheet to form a flat base and bake 16–18 minutes or until golden; cool.",
      "Combine lemon juice and zest, whipped topping, and icing sugar; mix until smooth and spread over cooled crust.",
      "Arrange kiwi, strawberries, mandarin oranges, and blueberries decoratively on top.",
      "Sprinkle with additional lemon zest and icing sugar if desired before serving."
    ],
    addedBy: "Family",
    temp: "375°F",
    cookTime: "18 mins",
    timestamp: Date.now()
  }
];
