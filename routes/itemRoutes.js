const express = require('express');
const Item = require('../models/Item'); 
const router = express.Router();

// POST /items: Add a new item
router.post('/', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        // Handle validation errors
        res.status(400).json({ message: 'Error adding item', error: error.message });
    }
});

// GET /items: List all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error: error.message });
    }
});

module.exports = router;