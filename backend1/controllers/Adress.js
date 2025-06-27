import Address from "../models.js/adress.js";

export const create = async (req, res) => {
    try {
        const address = new Address(req.body);
        await address.save();
        res.status(201).json(address);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const addresses = await Address.find({ user: id });
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getById = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);
        if (!address) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Address.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error updating address', error: error.message });
    }
};

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Address.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.json({ message: 'Address deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Default export for all address functions
export default {
    create,
    getByUserId,
    getById,
    updateById,
    deleteById
};