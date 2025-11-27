// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAll,
  getById,
  addProduct,
  deleteById,
  updateDescription
} = require('../models/productModel');

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const p = await getById(id);
    if (!p) return res.status(404).json({ message: 'Product not found' });
    res.json(p);
  } catch (err) {
    next(err);
  }
});

// POST /api/products
// Body: { productId, productName, description, Stock }
router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.productId || !body.productName) {
      return res.status(400).json({ message: 'productId and productName required' });
    }
    const added = await addProduct(body);
    res.status(201).json({ message: 'Product added', product: added });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await deleteById(id);
    res.json({ message: `Product ${id} deleted` });
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:id/description
// Body: { description }
router.put('/:id/description', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    if (typeof description !== 'string') {
      return res.status(400).json({ message: 'description is required' });
    }
    const updated = await updateDescription(id, description);
    res.json({ message: `Product ${id} updated`, product: updated });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
