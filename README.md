# Inventory Management System (Backend)

A simple **Inventory Management System API** built using **Node.js**, **Express.js**, and **file-based JSON storage**. This project is organized into **models**, **routes**, and **middlewares** to follow clean code structure.

---

## 📌 Features

* Get all products
* Get a product by ID
* Add a new product
* Delete a product
* Update product description
* JSON file used as the storage system (`products.json`)
* Modular structure with models, routes, and middlewares

---

## 📁 Project Structure

```
inventory-backend/
│
├── data/
│   └── products.json
│
├── models/
│   └── productModel.js
│
├── routes/
│   └── productRoutes.js
│
├── middlewares/
│   ├── logger.js
│   └── errorHandler.js
│
├── server.js
└── package.json
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-url>
cd inventory-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Start the server

```
npm start
```

Or if using nodemon:

```
npm run dev
```

### 4. Server Runs At:

```
http://localhost:3000
```

---

## 🛠 API Endpoints

### ✔ **GET** — Get all products

```
GET /api/products
```

### ✔ **GET** — Get product by ID

```
GET /api/products/:id
```

### ✔ **POST** — Add new product

```
POST /api/products
```

**Body (JSON):**

```json
{
  "productId": 11,
  "productName": "Pizza",
  "description": "Cheesy",
  "Stock": true
}
```

### ✔ **DELETE** — Delete a product by ID

```
DELETE /api/products/:id
```

### ✔ **PUT** — Update product description

```
PUT /api/products/:id/description
```

**Body:**

```json
{
  "description": "Updated description here"
}
```

---

## 📄 JSON Data File

Your product list is stored inside:

```
data/products.json
```

You must create at least **10 products**, per assignment requirement.

---

## 🧩 Middlewares

### 🔹 logger.js

Logs method, URL, and timestamp.

### 🔹 errorHandler.js

Handles errors globally and returns proper JSON responses.

---

## 📌 Notes

* This project uses **file-based storage**, suitable for small assignments.
* For production-level apps, consider replacing JSON file with a real database (MongoDB, PostgreSQL, etc.).

---
