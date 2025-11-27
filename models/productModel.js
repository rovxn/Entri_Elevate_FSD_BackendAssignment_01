// models/productModel.js
const fs = require('fs').promises;
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'products.json');

async function readProducts() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    // if file missing, return empty array
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeProducts(products) {
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf8');
}

async function getAll() {
  return readProducts();
}

async function getById(id) {
  const products = await readProducts();
  return products.find(p => p.productId === id);
}

async function addProduct(product) {
  const products = await readProducts();

  // ensure unique productId (basic check)
  if (products.some(p => p.productId === product.productId)) {
    const err = new Error('productId already exists');
    err.status = 400;
    throw err;
  }

  products.push(product);
  await writeProducts(products);
  return product;
}

async function deleteById(id) {
  const products = await readProducts();
  const filtered = products.filter(p => p.productId !== id);
  if (filtered.length === products.length) {
    const err = new Error('Product not found');
    err.status = 404;
    throw err;
  }
  await writeProducts(filtered);
  return true;
}

async function updateDescription(id, description) {
  const products = await readProducts();
  let found = false;
  const updated = products.map(p => {
    if (p.productId === id) {
      found = true;
      return { ...p, description };
    }
    return p;
  });
  if (!found) {
    const err = new Error('Product not found');
    err.status = 404;
    throw err;
  }
  await writeProducts(updated);
  return updated.find(p => p.productId === id);
}

module.exports = {
  getAll,
  getById,
  addProduct,
  deleteById,
  updateDescription
};
