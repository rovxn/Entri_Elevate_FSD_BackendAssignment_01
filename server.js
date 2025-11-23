const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const requestLogger = require('./middleware/logger');
const notFoundHandler = require('./middleware/errorHandler');

const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// --- Database Connection (ConnectDB function remains in server.js) ---
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); 
    }
};
connectDB();

// --- Global Middleware Setup ---
// 1. Body Parser for JSON
app.use(express.json());

// 2. Custom Request Logger (Part 1, Task 3)
app.use(requestLogger);

// --- Basic Routes (Part 1, Task 2) ---

// GET / returns "Inventory API is Running"
app.get('/', (req, res) => {
    res.send("Inventory API is Running");
});

// GET /health → returns server status message
app.get('/health', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    res.status(200).json({
        status: 'Server is healthy',
        database: dbStatus,
        uptime: process.uptime()
    });
});

// --- Item Routes (Part 2, Task 3) ---
// Use the router for all /items endpoints
app.use('/items', itemRoutes); 

// --- 404 Error Handler Middleware (Part 1, Task 3) ---
// Must be last middleware
app.use(notFoundHandler);


// --- Start Server (Part 1, Task 1) ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});