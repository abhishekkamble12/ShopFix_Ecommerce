import Cart from "../models.js/cart.js";

export const create = async (req, res) => {
    try {
        const { user, product, quantity } = req.body;
        
        // Check if item already exists in cart
        const existingItem = await Cart.findOne({ user, product });
        
        if (existingItem) {
            // Update quantity
            existingItem.quantity += quantity;
            await existingItem.save();
            res.json(existingItem);
        } else {
            // Add new item
            const cartItem = new Cart({ user, product, quantity });
            await cartItem.save();
            res.status(201).json(cartItem);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getByUserId = async (req, res) => {
    try {
        const cartItems = await Cart.find({ user: req.params.id })
            .populate('product');
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cartItem = await Cart.findByIdAndUpdate(
            req.params.id,
            { quantity },
            { new: true, runValidators: true }
        );
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json(cartItem);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteByUserId = async (req, res) => {
    try {
        await Cart.deleteMany({ user: req.params.id });
        res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all cart functions
export default {
    create,
    getByUserId,
    updateById,
    deleteById,
    deleteByUserId
};
