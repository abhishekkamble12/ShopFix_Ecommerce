export const sampleProducts = [
  {
    _id: '1',
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
    sku: 'IPH15PRO-001',
    category: { _id: '1', name: 'Electronics' },
    brand: { _id: '1', name: 'Apple' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '2',
    title: 'Samsung Galaxy S24',
    description: 'Premium Android smartphone with AI features',
    price: 899.99,
    discountPercentage: 10,
    stockQuantity: 30,
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400'
    ],
    sku: 'SAMS24-001',
    category: { _id: '1', name: 'Electronics' },
    brand: { _id: '2', name: 'Samsung' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '3',
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air Max technology',
    price: 129.99,
    discountPercentage: 15,
    stockQuantity: 100,
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
    ],
    sku: 'NIKE270-001',
    category: { _id: '2', name: 'Clothing' },
    brand: { _id: '3', name: 'Nike' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '4',
    title: 'MacBook Pro 14"',
    description: 'Professional laptop with M3 chip for creative work',
    price: 1999.99,
    discountPercentage: 0,
    stockQuantity: 25,
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'
    ],
    sku: 'MBP14-001',
    category: { _id: '1', name: 'Electronics' },
    brand: { _id: '1', name: 'Apple' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '5',
    title: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones',
    price: 299.99,
    discountPercentage: 20,
    stockQuantity: 75,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    ],
    sku: 'WH-001',
    category: { _id: '1', name: 'Electronics' },
    brand: { _id: '2', name: 'Samsung' },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: '6',
    title: 'Smart Watch',
    description: 'Fitness tracking and notification smartwatch',
    price: 199.99,
    discountPercentage: 25,
    stockQuantity: 60,
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
    ],
    sku: 'SW-001',
    category: { _id: '1', name: 'Electronics' },
    brand: { _id: '1', name: 'Apple' },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const sampleCategories = [
  { _id: '1', name: 'Electronics', description: 'Electronic devices and gadgets' },
  { _id: '2', name: 'Clothing', description: 'Fashion and apparel' },
  { _id: '3', name: 'Home & Garden', description: 'Home improvement and garden supplies' },
  { _id: '4', name: 'Books', description: 'Books and literature' },
  { _id: '5', name: 'Sports', description: 'Sports equipment and accessories' }
];

export const sampleBrands = [
  { _id: '1', name: 'Apple', description: 'Premium technology products' },
  { _id: '2', name: 'Samsung', description: 'Innovative electronics' },
  { _id: '3', name: 'Nike', description: 'Athletic footwear and apparel' },
  { _id: '4', name: 'Adidas', description: 'Sports and casual wear' },
  { _id: '5', name: 'IKEA', description: 'Furniture and home accessories' }
]; 