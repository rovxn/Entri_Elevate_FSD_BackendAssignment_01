// server.js
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger);

// mount router at /api/products
app.use('/api/products', productRoutes);

// healthcheck
app.get('/', (req, res) => res.send('Inventory API is up'));

// error handler (should be last)
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
