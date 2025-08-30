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

    return {
      id: faker.string.uuid(),
      name: `${baseName} ${index + 1}`,
      category: categoryId,
      price,
      description: faker.commerce.productDescription(),
      sizes: [],
      colors: [],
      image: "",
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
