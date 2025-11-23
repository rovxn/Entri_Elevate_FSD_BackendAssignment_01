# Simple Inventory Management System Backend

This project implements a basic backend for an inventory system using ExpressJS and Mongoose with MongoDB.


## 🚀 Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites
* Node.js and npm installed.
* A running instance of MongoDB (Atlas or Compass).

### Steps
1.  **Clone the Repository:**
    ```bash
    git clone <YOUR_REPO_URL>
    cd inventory-api
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the root directory and add your MongoDB connection string and port:
    ```
    MONGO_URI="YOUR_MONGODB_CONNECTION_STRING" 
    PORT=3000
    ```

4.  **Run the Server:**
    ```bash
    node server.js
    # Server should be running on http://localhost:3000
    ```

## 📝 Item Schema

The Mongoose model for the `Item` collection uses the following schema:

| Field | Type | Description |
| :--- | :--- | :--- |
| `name` | String | Name of the inventory item. |
| `quantity` | Number | Current stock level. |
| `price` | Number | Unit price of the item. |

## 🔗 API Endpoints

The following APIs are implemented in this backend:

| Method | Route | Description | Details |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Checks if the API is running. | Returns: `"Inventory API is Running"`. |
| **GET** | `/health` | Returns the server's status. | Returns: JSON status (e.g., database connection status, uptime). |
| **POST** | `/items` | **Adds a new item** to the inventory. | Requires JSON body with `name`, `quantity`, and `price`. |
| **GET** | `/items` | **Lists all items** in the inventory. | Returns: JSON array of all Item documents. |
| **ALL** | `* (404)` | **Error Handler**. | Returns: JSON message `{ error: "Not Found", ... }` for non-existent routes. |

## ⚙️ Middleware Used

The following middleware is used in the application:
1.  **Request Logger**: Logs the request method and URL for every incoming request.
2.  **404 Handler**: Catches all requests that did not match any defined routes and returns a 404 JSON error message.

## ✅ Postman Testing

All routes, including basic GET requests, the POST route for adding data, and the 404 error handler, have been successfully tested using Postman.

*The Postman Collection export is included in this repository/folder for validation.*