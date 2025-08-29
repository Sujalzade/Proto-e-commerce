import { faker } from '@faker-js/faker';

// Helper function to get appropriate image based on category
const getCategoryImage = (category) => {
  const imageMap = {
    'tshirts': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'shirts': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'jeans': () => faker.image.urlLoremFlickr({ category: 'jeans', width: 400, height: 400 }),
    'shorts': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'jackets': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'hoodies': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'shoes': () => faker.image.urlLoremFlickr({ category: 'shoes', width: 400, height: 400 }),
    'pants': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'sweaters': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 }),
    'accessories': () => faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 })
  };
  
  return imageMap[category] ? imageMap[category]() : faker.image.urlLoremFlickr({ category: 'fashion', width: 400, height: 400 });
};

export const categories = [
  {
    "id": "tshirts",
    "name": "T-Shirts",
    "image": "/images/categories/tshirts.svg"
  },
  {
    "id": "shirts",
    "name": "Shirts",
    "image": "/images/categories/shirts.svg"
  },
  {
    "id": "jeans",
    "name": "Jeans",
    "image": "/images/categories/jeans.svg"
  },
  {
    "id": "shorts",
    "name": "Shorts",
    "image": "/images/categories/shorts.svg"
  },
  {
    "id": "jackets",
    "name": "Jackets",
    "image": "/images/categories/jackets.svg"
  },
  {
    "id": "hoodies",
    "name": "Hoodies",
    "image": "/images/categories/hoodies.svg"
  },
  {
    "id": "shoes",
    "name": "Shoes",
    "image": "/images/categories/shoes.svg"
  },
  {
    "id": "pants",
    "name": "Pants",
    "image": "/images/categories/pants.svg"
  },
  {
    "id": "sweaters",
    "name": "Sweaters",
    "image": "/images/categories/sweaters.svg"
  },
  {
    "id": "accessories",
    "name": "Accessories",
    "image": "/images/categories/accessories.svg"
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

    return {
      id: faker.string.uuid(),
      name: `${baseName} ${index + 1}`,
      category: categoryId,
      price,
      description: faker.commerce.productDescription(),
      sizes: [],
      colors: [],
      image: getCategoryImage(categoryId),
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
