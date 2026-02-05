# Complaint / Issue Tracker API

## 📌 Project Overview
This project is a **backend REST API** built using **Node.js** and **Express.js** for managing complaints or issues.  
The main objective of this project is to understand:

- Express routing
- Middleware usage
- Clean backend folder structure
- Separation of routes and controllers
- In-memory data handling (without database)

⚠️ As per the assignment rules, **no database is used**. All data is stored in memory using JavaScript arrays.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- JavaScript (ES Modules)

---

## 📂 Folder Structure
`complaint-api/
│
├── server.js
├── app.js
├── package.json
│
├── routes/
│ └── complaint.routes.js
│
├── controllers/
│ └── complaint.controller.js
│
├── middleware/
│ ├── logger.middleware.js
│ └── auth.middleware.js
│
└── README.md`

---

## 📄 Description of Files

### `server.js`
- Entry point of the application
- Starts the server on port **3000**

### `app.js`
- Creates the Express app
- Registers middleware and routes

### `routes/complaint.routes.js`
- Defines all API routes
- Uses `express.Router()`
- Does not contain business logic

### `controllers/complaint.controller.js`
- Contains all complaint logic
- Stores complaint data in an in-memory array
- Handles GET, POST, PUT, DELETE operations

### `middleware/logger.middleware.js`
- App-level middleware
- Logs HTTP method and URL for every request

### `middleware/auth.middleware.js`
- Route-level middleware
- Protects update and delete routes
- Logs `Auth checked`

---

## 📌 Complaint Object Structure
```json
{
  "id": number,
  "title": string,
  "description": string,
  "status": "open" | "resolved"
}
