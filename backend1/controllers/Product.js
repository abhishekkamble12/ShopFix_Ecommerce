import Product from '../models.js/Product.js';
import { sampleProducts } from '../data/products.js';

export const create = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        const populatedProduct = await Product.findById(newProduct._id).populate('brand').populate('category');
        res.status(201).json(populatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const [products, total] = await Promise.all([
            Product.find({ isDeleted: false })
                .populate('brand')
                .populate('category')
                .skip(skip)
                .limit(limit),
            Product.countDocuments({ isDeleted: false })
        ]);
        if (products.length === 0) {
            // Fallback to sample data
            const samplePage = sampleProducts.slice(skip, skip + limit);
            return res.json({
                products: samplePage,
                total: sampleProducts.length,
                page,
                limit
            });
        }
        res.json({
            products,
            total,
            page,
            limit
        });
    } catch (error) {
        // Fallback to sample data on error
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const samplePage = sampleProducts.slice(skip, skip + limit);
        res.json({
            products: samplePage,
            total: sampleProducts.length,
            page,
            limit
        });
    }
};

export const getById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id, isDeleted: false })
            .populate('brand')
            .populate('category');
        if (!product) {
            // Fallback to sample data
            const sampleProduct = sampleProducts.find(p => p._id === req.params.id);
            if (!sampleProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.json(sampleProduct);
        }
        res.json(product);
    } catch (error) {
        // Fallback to sample data on error
        const sampleProduct = sampleProducts.find(p => p._id === req.params.id);
        if (!sampleProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(sampleProduct);
    }
};

export const updateById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: new Date() },
            { new: true }
        ).populate('brand').populate('category');
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { isDeleted: true, updatedAt: new Date() },
            { new: true }
        );
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const undeleteById = async (req, res) => {
    try {
        const restoredProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { isDeleted: false, updatedAt: new Date() },
            { new: true }
        );
        if (!restoredProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product restored successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all product functions
export default {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    undeleteById
}; 