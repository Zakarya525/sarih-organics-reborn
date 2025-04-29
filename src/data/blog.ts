
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export const blogArticles: BlogPost[] = [
  {
    id: 1,
    title: "The Benefits of Organic Honey for Your Health",
    slug: "benefits-organic-honey-health",
    excerpt: "Discover why organic honey is not just delicious but also packed with health benefits for your immune system and overall wellbeing.",
    content: `
      <p>Organic honey is one of nature's most remarkable gifts. Unlike conventional honey, organic varieties are produced from the nectar of flowers that have not been treated with chemicals, pesticides, or herbicides. This makes organic honey a pure, uncontaminated food source with numerous health benefits.</p>
      
      <h2>Boosting Your Immune System</h2>
      <p>One of the most well-known benefits of organic honey is its ability to strengthen the immune system. Rich in antioxidants and containing antimicrobial properties, regular consumption of organic honey can help your body fight off infections and reduce the severity of allergic reactions.</p>
      
      <h2>Natural Energy Source</h2>
      <p>Organic honey is an excellent source of natural energy. The glucose in honey is quickly absorbed by the body, providing an immediate energy boost, while the fructose is absorbed more slowly, offering sustained energy. This makes organic honey a perfect pre-workout snack or a natural remedy for afternoon fatigue.</p>
      
      <h2>Supporting Digestive Health</h2>
      <p>Many people don't realize that organic honey can aid digestion. Its natural enzymes promote the growth of good bacteria in the intestines and can help alleviate issues like constipation, bloating, and acid reflux when consumed regularly.</p>
      
      <h2>How to Incorporate Organic Honey Into Your Diet</h2>
      <ul>
        <li>Start your day with a spoonful in warm water with lemon</li>
        <li>Use as a natural sweetener in tea or coffee</li>
        <li>Drizzle over yogurt or oatmeal</li>
        <li>Spread on whole grain toast with almond butter</li>
        <li>Use in homemade salad dressings and marinades</li>
      </ul>
      
      <p>When choosing organic honey, always look for certified organic products from reputable sources. Remember that the color and flavor of honey vary depending on the flowers the bees visited, so don't be afraid to explore different varieties to find your favorite!</p>
    `,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    date: "April 15, 2023",
    category: "Health & Nutrition",
    author: {
      name: "Dr. Maya Patel",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    tags: ["honey", "organic food", "health benefits", "nutrition"]
  },
  {
    id: 2,
    title: "Sustainable Farming Practices: From Field to Table",
    slug: "sustainable-farming-practices",
    excerpt: "Learn about the sustainable farming methods we use to ensure our products are not only good for you but also good for the planet.",
    content: `
      <p>Sustainable farming is at the heart of our philosophy at Sari Horganics. We believe that the way food is grown affects not only its nutritional value and taste but also the health of our planet. That's why we work closely with local farmers who practice sustainable agriculture.</p>
      
      <h2>What is Sustainable Farming?</h2>
      <p>Sustainable farming involves agricultural practices that protect the environment, public health, and animal welfare while maintaining economic viability. It focuses on renewable resources, biodiversity, and natural cycles to create a balanced ecosystem.</p>
      
      <h2>Our Sustainable Practices</h2>
      <h3>1. Crop Rotation</h3>
      <p>Our farmers rotate crops seasonally to naturally replenish soil nutrients and disrupt pest cycles. This reduces the need for synthetic fertilizers and pesticides while improving soil health and crop yield.</p>
      
      <h3>2. Water Conservation</h3>
      <p>We implement drip irrigation systems and rainwater harvesting to minimize water usage. These techniques ensure that our farms use water efficiently, especially important in Bali's diverse microclimate regions.</p>
      
      <h3>3. Natural Pest Management</h3>
      <p>Instead of harmful chemicals, we use companion planting, beneficial insects, and natural barriers to manage pests. This preserves the delicate balance of the ecosystem and ensures our products remain free from chemical residues.</p>
      
      <h3>4. Composting and Organic Matter Management</h3>
      <p>All organic waste from our processing is composted and returned to the fields, completing the nutrient cycle and reducing waste. This practice enriches the soil and eliminates the need for synthetic fertilizers.</p>
      
      <h2>From Field to Table: Our Supply Chain</h2>
      <p>We pride ourselves on maintaining a short supply chain. Our products travel directly from farm to production facility to you, reducing transportation emissions and ensuring maximum freshness. We believe that knowing where your food comes from and how it was grown is essential for making healthy, sustainable choices.</p>
      
      <p>By supporting sustainable farming, you're not just making a choice for your health—you're making a choice for the planet. Every purchase of a Sari Horganics product helps sustain traditional farming practices and supports local communities in Bali.</p>
    `,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    date: "March 22, 2023",
    category: "Sustainability",
    author: {
      name: "Wayan Suardana",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    tags: ["sustainable farming", "organic agriculture", "environmental impact", "local economy"]
  },
  {
    id: 3,
    title: "Homemade Granola: Simple and Nutritious Breakfast Recipe",
    slug: "homemade-granola-recipe",
    excerpt: "Start your day right with this easy homemade granola recipe using our organic ingredients. Perfect for busy mornings and meal prep.",
    content: `
      <p>A nutritious breakfast sets the tone for your entire day. Our homemade granola recipe is not only delicious but also packed with organic ingredients that provide sustained energy and essential nutrients. Best of all, it's simple to make and can be prepared in advance for busy mornings.</p>
      
      <h2>Why Make Your Own Granola?</h2>
      <p>Store-bought granola often contains excessive sugars, preservatives, and processed ingredients. By making your own, you control exactly what goes into it, ensuring you're getting all the nutritional benefits without the unnecessary additives.</p>
      
      <h2>Organic Bali Granola Recipe</h2>
      
      <h3>Ingredients:</h3>
      <ul>
        <li>3 cups organic rolled oats</li>
        <li>1 cup raw organic nuts (almonds, cashews, pecans, or a mix)</li>
        <li>½ cup organic seeds (sunflower, pumpkin, or flax)</li>
        <li>1 teaspoon ground cinnamon</li>
        <li>½ teaspoon sea salt</li>
        <li>⅓ cup organic coconut oil, melted</li>
        <li>⅓ cup Sari Horganics wild forest honey</li>
        <li>1 teaspoon vanilla extract</li>
        <li>1 cup dried fruits (raisins, cranberries, chopped apricots)</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Preheat your oven to 300°F (150°C) and line a baking sheet with parchment paper.</li>
        <li>In a large bowl, combine the oats, nuts, seeds, cinnamon, and salt.</li>
        <li>In a small saucepan over low heat, warm the coconut oil and honey until liquid and well combined. Remove from heat and stir in vanilla.</li>
        <li>Pour the liquid mixture over the dry ingredients and stir until everything is well coated.</li>
        <li>Spread the mixture evenly on the prepared baking sheet.</li>
        <li>Bake for 20-25 minutes, stirring halfway through to ensure even toasting.</li>
        <li>The granola should be golden brown. It will crisp up as it cools.</li>
        <li>Let the granola cool completely before adding the dried fruits and storing in an airtight container.</li>
      </ol>
      
      <h3>Serving Suggestions:</h3>
      <ul>
        <li>With fresh fruits and yogurt</li>
        <li>Sprinkled over smoothie bowls</li>
        <li>As a topping for baked apples or pears</li>
        <li>Mixed with milk or plant-based alternatives</li>
        <li>By the handful as a nutritious snack</li>
      </ul>
      
      <p>This granola will keep for up to two weeks in an airtight container at room temperature, or longer if stored in the refrigerator. Make a double batch to have plenty on hand for quick breakfasts and snacks!</p>
    `,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    date: "February 8, 2023",
    category: "Recipes",
    author: {
      name: "Kadek Winda",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    tags: ["granola", "breakfast", "recipe", "healthy eating", "meal prep"]
  },
  {
    id: 4,
    title: "The Art of Traditional Balinese Food Preservation",
    slug: "balinese-food-preservation",
    excerpt: "Explore the ancient techniques of food preservation that have been practiced in Bali for centuries and how we incorporate them into our products.",
    content: `
      <p>Long before modern refrigeration and chemical preservatives, Balinese people developed sophisticated methods to preserve food using natural ingredients and processes. At Sari Horganics, we honor these traditional techniques, which not only extend the shelf life of our products but also enhance their flavors and nutritional benefits.</p>
      
      <h2>Fermentation: Nature's Preservation Method</h2>
      <p>Fermentation is perhaps the most important traditional preservation technique in Balinese culture. This natural process not only preserves food but also introduces beneficial probiotics that support gut health. Our jams and certain condiments utilize controlled fermentation processes that have been perfected over generations.</p>
      
      <h2>Sun Drying and Dehydration</h2>
      <p>Bali's tropical climate provides ideal conditions for sun drying fruits, herbs, and other ingredients. This ancient method removes moisture from food, preventing bacterial growth while concentrating flavors and nutrients. We use both traditional sun drying and modern dehydration techniques that mimic this natural process for our dried fruit products and certain ingredients in our granolas.</p>
      
      <h2>Natural Sweeteners as Preservatives</h2>
      <p>Honey has been used as a natural preservative in Balinese cuisine for centuries. Its low moisture content and natural antimicrobial properties make it ideal for food preservation. We use our organic wild forest honey not just for its delicious taste but also for its ability to naturally extend the shelf life of our products without artificial preservatives.</p>
      
      <h2>Aromatic Herbs and Spices</h2>
      <p>Bali's rich biodiversity includes numerous herbs and spices with natural preservative properties. Ingredients like turmeric, ginger, cinnamon, and cloves not only add distinctive flavors but also contain compounds that inhibit microbial growth and prevent spoilage. These traditional preservatives have the added benefit of providing various health benefits and creating the complex flavor profiles our products are known for.</p>
      
      <h2>Modern Meets Traditional</h2>
      <p>While we honor ancient preservation methods, we also embrace modern techniques that align with our commitment to quality and sustainability. Our approach combines traditional Balinese wisdom with contemporary food science to create products that are safe, nutritious, and free from artificial preservatives.</p>
      
      <p>When you enjoy Sari Horganics products, you're experiencing the culmination of centuries of Balinese food preservation wisdom. These traditional methods are not just practical techniques—they're an important part of Bali's cultural heritage that we're proud to continue.</p>
    `,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    date: "January 17, 2023",
    category: "Culture & Tradition",
    author: {
      name: "I Made Surya",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    tags: ["Balinese tradition", "food preservation", "cultural heritage", "sustainable methods"]
  },
  {
    id: 5,
    title: "Supporting Local Communities Through Fair Trade Practices",
    slug: "supporting-local-communities-fair-trade",
    excerpt: "Learn how our commitment to fair trade principles helps empower local farmers and strengthen communities throughout Bali.",
    content: `
      <p>At the heart of Sari Horganics' mission is a deep commitment to the people who make our products possible: the local farmers and artisans of Bali. By embracing fair trade principles, we're not just creating delicious organic products—we're helping to build stronger, more resilient communities.</p>
      
      <h2>What Fair Trade Means to Us</h2>
      <p>Fair trade is more than a certification or a marketing claim—it's a comprehensive approach to business that puts people and planet on equal footing with profit. For us, this means:</p>
      <ul>
        <li>Paying premium prices that reflect the true value of farmers' crops</li>
        <li>Establishing long-term relationships with our suppliers</li>
        <li>Providing technical assistance and training</li>
        <li>Supporting community development initiatives</li>
        <li>Ensuring safe working conditions throughout our supply chain</li>
      </ul>
      
      <h2>Impact on Farmer Livelihoods</h2>
      <p>When farmers receive fair compensation for their crops, the effect ripples throughout their lives. Many of our partner farmers have been able to send their children to school, improve their homes, and invest in better farming equipment. By providing a reliable income source, we help reduce the economic pressure that often forces rural Balinese to leave their communities for work in tourist areas or overseas.</p>
      
      <h2>Preserving Traditional Farming Knowledge</h2>
      <p>Bali has a rich agricultural heritage dating back thousands of years. The subak irrigation system, recognized by UNESCO as a cultural landscape, represents centuries of wisdom about sustainable water management. By supporting traditional farming practices and paying fair prices for crops, we help ensure this knowledge continues to be valued and passed down through generations.</p>
      
      <h2>Women's Empowerment</h2>
      <p>Many of our partnering farms and processing facilities are operated by women, who play a crucial role in Balinese agriculture. Through fair trade practices, we help ensure these women receive equitable pay and have opportunities for leadership and skill development. The income they earn often goes directly to improving family nutrition, education, and healthcare.</p>
      
      <h2>Building Community Resilience</h2>
      <p>Beyond individual livelihoods, our fair trade commitments help strengthen entire communities. A portion of our profits goes toward community development projects, including:
      <ul>
        <li>Educational scholarships for farmers' children</li>
        <li>Community health initiatives</li>
        <li>Infrastructure improvements in rural areas</li>
        <li>Environmental conservation efforts</li>
      </ul>
      
      <p>When you purchase Sari Horganics products, you're participating in this cycle of positive impact. Your choice supports not just sustainable agriculture, but also the people and communities who make our work possible. This is the power of conscious consumption—creating a world where business serves as a force for good.</p>
    `,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3",
    date: "December 5, 2022",
    category: "Community",
    author: {
      name: "Ni Komang Ayu",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    tags: ["fair trade", "community support", "sustainable business", "social impact"]
  },
  {
    id: 6,
    title: "Seasonal Guide to Tropical Fruits in Bali",
    slug: "seasonal-guide-tropical-fruits-bali",
    excerpt: "Discover the best times of year to enjoy Bali's incredible variety of tropical fruits and how we incorporate them into our seasonal products.",
    content: `
      <p>One of the joys of living in or visiting Bali is the incredible abundance and diversity of tropical fruits available throughout the year. At Sari Horganics, we work closely with the seasons, creating products that showcase these fruits at their peak flavor and nutritional value.</p>
      
      <h2>Understanding Bali's Fruit Seasons</h2>
      <p>While Bali's tropical climate means some fruits are available year-round, many have distinct seasons when they're at their absolute best. The island's wet season (October to April) and dry season (May to September) create natural cycles of abundance for different fruits.</p>
      
      <h2>Year-Round Fruits</h2>
      <p>These reliable staples form the backbone of many of our products and are available throughout the year:</p>
      <ul>
        <li><strong>Bananas (Pisang)</strong>: Bali is home to numerous banana varieties, from the small sweet pisang mas to the larger pisang raja. We use these in our granolas and as natural sweeteners.</li>
        <li><strong>Papaya (Pepaya)</strong>: Rich in enzymes and vitamins, papayas feature in our seasonal jams and fresh products.</li>
        <li><strong>Coconut (Kelapa)</strong>: An essential ingredient in many of our products, providing natural oils, milk, and flesh.</li>
      </ul>
      
      <h2>Wet Season Treasures (October-April)</h2>
      <p>The rainy months bring an explosion of these delicious fruits:</p>
      <ul>
        <li><strong>Mangosteen (Manggis)</strong>: Available December-March, this "queen of fruits" has delicate white segments with a perfect balance of sweet and tangy notes.</li>
        <li><strong>Rambutan</strong>: Peaking from December to February, these hairy red fruits contain translucent sweet flesh that we use in specialty preserves.</li>
        <li><strong>Durian</strong>: The controversial "king of fruits" is in season from December to February. Those who love its creamy texture and complex flavor can find it in some of our limited-edition products.</li>
        <li><strong>Snake Fruit (Salak)</strong>: With its scaly skin and unique sweet-acidic taste, salak is abundant from January to May.</li>
      </ul>
      
      <h2>Dry Season Delights (May-September)</h2>
      <p>These fruits thrive during Bali's sunnier months:</p>
      <ul>
        <li><strong>Mango (Mangga)</strong>: Prime season is September to November, when we create our popular mango preserves and dried mango products.</li>
        <li><strong>Mangosteen (Manggis)</strong>: A secondary season occurs from May-August.</li>
        <li><strong>Passion Fruit (Markisa)</strong>: Most abundant from June to September, adding bright, tangy notes to our jams and drinks.</li>
      </ul>
      
      <h2>How We Work With Seasonal Fruits</h2>
      <p>At Sari Horganics, seasonality guides our production schedule. We:</p>
      <ul>
        <li>Create limited-edition products that showcase fruits at their peak</li>
        <li>Preserve seasonal abundance through traditional methods</li>
        <li>Work directly with farmers to get the freshest fruits within hours of harvest</li>
        <li>Adjust our recipes to accommodate the natural sugar levels and flavor profiles of in-season fruits</li>
      </ul>
      
      <p>This seasonal approach not only ensures the highest quality products but also supports the natural agricultural rhythms that have sustained Bali for centuries. We invite you to explore our seasonal offerings throughout the year to experience the full spectrum of Bali's incredible fruit diversity.</p>
    `,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3",
    date: "November 14, 2022",
    category: "Food & Agriculture",
    author: {
      name: "Putu Eka",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    tags: ["tropical fruits", "seasonal eating", "Balinese agriculture", "food education"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogArticles.find(post => post.slug === slug);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return [...blogArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getRelatedPosts(postId: number, limit: number = 3): BlogPost[] {
  const currentPost = blogArticles.find(post => post.id === postId);
  if (!currentPost) return [];
  
  return blogArticles
    .filter(post => post.id !== postId && post.category === currentPost.category)
    .slice(0, limit);
}
