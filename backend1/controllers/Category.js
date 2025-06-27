import { sampleCategories } from '../data/products.js';

export const create = async (req, res) => {
    try {
        const newCategory = {
            _id: (sampleCategories.length + 1).toString(),
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        sampleCategories.push(newCategory);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        res.json(sampleCategories);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const category = sampleCategories.find(c => c._id === req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const categoryIndex = sampleCategories.findIndex(c => c._id === req.params.id);
        if (categoryIndex === -1) {
            return res.status(404).json({ message: 'Category not found' });
        }
        
        sampleCategories[categoryIndex] = {
            ...sampleCategories[categoryIndex],
            ...req.body,
            updatedAt: new Date()
        };
        
        res.json(sampleCategories[categoryIndex]);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const categoryIndex = sampleCategories.findIndex(c => c._id === req.params.id);
        if (categoryIndex === -1) {
            return res.status(404).json({ message: 'Category not found' });
        }
        
        sampleCategories.splice(categoryIndex, 1);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all category functions
export default {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}; 