import { faker } from '@faker-js/faker';

export const categories = [
  {
    "id": "tshirts",
    "name": "T-Shirts",
    "image": ""
  },
  {
    "id": "shirts",
    "name": "Shirts",
    "image": ""
  },
  {
    "id": "jeans",
    "name": "Jeans",
    "image": ""
  },
  {
    "id": "shorts",
    "name": "Shorts",
    "image": ""
  },
  {
    "id": "jackets",
    "name": "Jackets",
    "image": ""
  },
  {
    "id": "hoodies",
    "name": "Hoodies",
    "image": ""
  },
  {
    "id": "shoes",
    "name": "Shoes",
    "image": ""
  },
  {
    "id": "pants",
    "name": "Pants",
    "image": ""
  },
  {
    "id": "sweaters",
    "name": "Sweaters",
    "image": ""
  },
  {
    "id": "accessories",
    "name": "Accessories",
    "image": ""
  }
];

// Generate at least 10 products per existing category
const generateProductsForCategory = (categoryId, count = 10) => {
  const baseNameByCategory = {
    tshirts: 'T-Shirt',
    shirts: 'Shirt',
    jeans: 'Jeans',
    shorts: 'Shorts',
    jackets: 'Jacket',
    hoodies: 'Hoodie',
    shoes: 'Shoe',
    pants: 'Pants',
    sweaters: 'Sweater',
    accessories: 'Accessory'
  };

  const baseName = baseNameByCategory[categoryId] || 'Item';

  return Array.from({ length: count }).map((_, index) => {
    const price = faker.number.int({ min: 499, max: 4999 });
    const rating = Number((faker.number.float({ min: 3.5, max: 5.0, fractionDigits: 1 })).toFixed(1));
    const reviews = faker.number.int({ min: 24, max: 240 });
    
    // Use static image URLs based on category
    const imageMap = {
      tshirts: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
      shirts: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400",
      jeans: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400",
      shorts: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400",
      jackets: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400",
      hoodies: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=400",
      shoes: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400",
      pants: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=400",
      sweaters: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=400",
      accessories: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400"
    };
    
    // Add variation to images within the same category
    const imageVariations = [
      "", "?v=1", "?v=2", "?v=3", "?v=4", "?v=5", 
      "?v=6", "?v=7", "?v=8", "?v=9", "?v=10"
    ];
    
    const baseImage = imageMap[categoryId] || "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400";
    const imageVariation = imageVariations[index % imageVariations.length];

    return {
      id: faker.string.uuid(),
      name: `${baseName} ${index + 1}`,
      category: categoryId,
      price,
      description: faker.commerce.productDescription(),
      sizes: [],
      colors: [],
      image: baseImage + imageVariation,
      rating,
      reviews
    };
  });
};

export const products = categories.flatMap((cat) => generateProductsForCategory(cat.id, 10));

// Export the complete data structure
export const productData = {
  categories,
  products
};
