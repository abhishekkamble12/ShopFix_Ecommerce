import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import Category from './models/Category.js';
import Brand from './models/Brand.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

// Sample data
const categories = [
  { name: 'Electronics', description: 'Electronic devices and gadgets' },
  { name: 'Clothing', description: 'Fashion and apparel' },
  { name: 'Home & Garden', description: 'Home improvement and garden supplies' },
  { name: 'Books', description: 'Books and literature' },
  { name: 'Sports', description: 'Sports equipment and accessories' }
];

const brands = [
  { name: 'Apple', description: 'Premium technology products' },
  { name: 'Samsung', description: 'Innovative electronics' },
  { name: 'Nike', description: 'Athletic footwear and apparel' },
  { name: 'Adidas', description: 'Sports and casual wear' },
  { name: 'IKEA', description: 'Furniture and home accessories' }
];

const products = [
  {
    title: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip',
    price: 999.99,
    discountPercentage: 5,
    stockQuantity: 50,
    thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'
    ],
    sku: 'IPH15PRO-001'
  },
  {
    title: 'Samsung Galaxy S24',
    description: 'Premium Android smartphone with AI features',
    price: 899.99,
    discountPercentage: 10,
    stockQuantity: 30,
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400'
    ],
    sku: 'SAMS24-001'
  },
  {
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air Max technology',
    price: 129.99,
    discountPercentage: 15,
    stockQuantity: 100,
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
    ],
    sku: 'NIKE270-001'
  },
  {
    title: 'MacBook Pro 14"',
    description: 'Professional laptop with M3 chip for creative work',
    price: 1999.99,
    discountPercentage: 0,
    stockQuantity: 25,
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'
    ],
    sku: 'MBP14-001'
  },
  {
    title: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones',
    price: 299.99,
    discountPercentage: 20,
    stockQuantity: 75,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    ],
    sku: 'WH-001'
  },
  {
    title: 'Smart Watch',
    description: 'Fitness tracking and notification smartwatch',
    price: 199.99,
    discountPercentage: 25,
    stockQuantity: 60,
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
    ],
    sku: 'SW-001'
  }
];

async function seedData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Category.deleteMany({});
    await Brand.deleteMany({});
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Insert categories
    const createdCategories = await Category.insertMany(categories);
    console.log('Categories seeded:', createdCategories.length);

    // Insert brands
    const createdBrands = await Brand.insertMany(brands);
    console.log('Brands seeded:', createdBrands.length);

    // Add category and brand references to products
    const productsWithRefs = products.map((product, index) => ({
      ...product,
      category: createdCategories[index % createdCategories.length]._id,
      brand: createdBrands[index % createdBrands.length]._id
    }));

    // Insert products
    const createdProducts = await Product.insertMany(productsWithRefs);
    console.log('Products seeded:', createdProducts.length);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData(); 