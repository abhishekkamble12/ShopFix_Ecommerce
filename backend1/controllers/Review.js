import Review from "../models.js/Review.js";

export const create = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getByProductId = async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.id })
            .populate('user', 'name email');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
            .populate('user', 'name email')
            .populate('product', 'title');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all review functions
export default {
    create,
    getByProductId,
    getById,
    updateById,
    deleteById
}; 