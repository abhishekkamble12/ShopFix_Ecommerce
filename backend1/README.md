# Backend1 - Node.js API Server

This is a Node.js Express server with MongoDB integration for the ecommerce application.

## Features

- User authentication (signup, login, JWT tokens)
- Product management (CRUD operations)
- Order management
- Cart functionality
- User management
- Address management
- Review system
- Wishlist functionality
- Brand and category management

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/ecommerce
   PORT=8000
   ORIGIN=http://localhost:3000
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

3. **Start MongoDB:**
   Make sure MongoDB is running on your system.

4. **Run the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/verify-otp` - Verify OTP
- `POST /auth/resend-otp` - Resend OTP
- `POST /auth/forgot-password` - Forgot password
- `POST /auth/reset-password` - Reset password
- `GET /auth/check-auth` - Check authentication status
- `GET /auth/logout` - Logout

### Users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user

### Products
- `POST /products` - Create product
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `PATCH /products/:id` - Update product
- `DELETE /products/:id` - Delete product
- `PATCH /products/undelete/:id` - Restore deleted product

### Orders
- `POST /orders` - Create order
- `GET /orders` - Get all orders
- `GET /orders/user/:id` - Get orders by user ID
- `PATCH /orders/:id` - Update order

### Cart
- Cart management endpoints

### Other endpoints for brands, categories, addresses, reviews, and wishlist

## Project Structure

```
backend1/
├── controllers/     # Route handlers
├── middleware/      # Custom middleware
├── models.js/       # MongoDB models
├── routes/          # API routes
├── server.js        # Main server file
├── package.json     # Dependencies
└── README.md        # This file
```

## Dependencies

- Express.js - Web framework
- Mongoose - MongoDB ODM
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin resource sharing
- dotenv - Environment variables
- cookie-parser - Cookie parsing 