import { sampleBrands } from '../data/products.js';

export const create = async (req, res) => {
    try {
        const newBrand = {
            _id: (sampleBrands.length + 1).toString(),
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        sampleBrands.push(newBrand);
        res.status(201).json(newBrand);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        res.json(sampleBrands);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const brand = sampleBrands.find(b => b._id === req.params.id);
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json(brand);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const brandIndex = sampleBrands.findIndex(b => b._id === req.params.id);
        if (brandIndex === -1) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        
        sampleBrands[brandIndex] = {
            ...sampleBrands[brandIndex],
            ...req.body,
            updatedAt: new Date()
        };
        
        res.json(sampleBrands[brandIndex]);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const brandIndex = sampleBrands.findIndex(b => b._id === req.params.id);
        if (brandIndex === -1) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        
        sampleBrands.splice(brandIndex, 1);
        res.json({ message: 'Brand deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all brand functions
export default {
    create,
    getAll,
    getById,
    updateById,
    deleteById
};