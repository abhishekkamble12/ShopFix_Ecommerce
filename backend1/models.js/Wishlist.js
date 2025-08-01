import mongoose from 'mongoose';
const { Schema } = mongoose;

const wishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    note: {
        type: String,
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model("Wishlist", wishlistSchema);