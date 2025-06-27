import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // <-- Add this
import productRoutes from "./routes/Productroutes.js";
import categoryRoutes from "./routes/Categoryroutes.js";
import brandRoutes from "./routes/Brand.js";
import cartRoutes from "./routes/cartroutes.js";
import wishlistRoutes from "./routes/Wishlistroutes.js";
import orderRoutes from "./routes/Orderroutes.js";
import addressRoutes from "./routes/Addressroutes.js";
import reviewRoutes from "./routes/reviewroutes.js";
import userRoutes from "./routes/Userroutes.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true, 
    exposedHeaders: ['X-Total-Count'], 
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));
app.use(express.json());
app.use(cookieParser());

// Register routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/brands", brandRoutes);
app.use("/cart", cartRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/order", orderRoutes);
app.use("/address", addressRoutes);
app.use("/review", reviewRoutes);
app.use('/users', userRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("MongoDB connection error:", err);
    console.log("Using sample data - MongoDB not connected");
});

.

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server [STARTED] ~ http://localhost:${PORT}`);
});
