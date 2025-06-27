import Order from '../models.js/order.js';

export const create = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getByUserId = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.id }).populate('products.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all order functions
export default {
    create,
    getAll,
    getByUserId,
    updateById
}; 