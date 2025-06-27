import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
            price: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address",
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Dispatched', 'Out for delivery', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    paymentMode: {
        type: String,
        enum: ['COD', 'UPI', 'CARD'],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false });

export default mongoose.model("Order", orderSchema);