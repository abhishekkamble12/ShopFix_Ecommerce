import Wishlist from "../models.js/Wishlist.js";

export const create = async (req, res) => {
    try {
        const created = await new Wishlist(req.body).populate({ path: "product", populate: ["brand"] });
        await created.save();
        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({ message: "Error adding product to wishlist", error: error.message });
    }
};

export const getByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        let skip = 0;
        let limit = 0;

        if (req.query.page && req.query.limit) {
            const pageSize = req.query.limit;
            const page = req.query.page;
            skip = pageSize * (page - 1);
            limit = pageSize;
        }

        const wishlist = await Wishlist.find({ user: id })
            .skip(skip)
            .limit(limit)
            .populate({ path: "product", populate: ['brand'] });
        const totalResults = await Wishlist.find({ user: id }).countDocuments().exec();

        res.set("X-Total-Count", totalResults);
        res.status(200).json({ wishlist });
    } catch (error) {
        console.error('Error fetching wishlist for user', req.params.id, error);
        res.status(500).json({ message: "Error fetching your wishlist", error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Wishlist.findByIdAndUpdate(id, req.body, { new: true }).populate("product");
        if (!updated) {
            return res.status(404).json({ message: 'Wishlist item not found' });
        }
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error updating your wishlist", error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Wishlist.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Wishlist item not found' });
        }
        res.status(200).json({ message: 'Item removed from wishlist' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting that product from wishlist", error: error.message });
    }
};

// Default export for all wishlist functions
export default {
    create,
    getByUserId,
    updateById,
    deleteById
};