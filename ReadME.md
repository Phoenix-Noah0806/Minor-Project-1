# Complaint / Issue Tracker System

## 📌 Project Overview
The **Complaint / Issue Tracker System** is a full-stack web application built using **Node.js, Express.js, HTML, CSS, and JavaScript**.  
It allows users to submit complaints through a **User Portal** and enables administrators to manage them through an **Admin Dashboard** with real-time updates, filtering, searching, and status management.

⚠️ As per assignment rules, **no database is used**. All complaint data is stored in memory using JavaScript arrays.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- JavaScript (ES Modules)
- HTML5
- CSS3
- Vanilla JavaScript (Frontend)

---

## 📂 Project Structure
`Minor-Project-1/
│
├── server.js
├── app.js
├── package.json
│
├── routes/
│ └── complaint.routes.js
│
├── Controllers/
│ └── complaint.controller.js
│
├── Middleware/
│ ├── logger.middleware.js
│ └── auth.middleware.js
│
├── public/
│ ├── index.html
│ ├── admin.html
│ ├── styles.css
│ ├── admin.css
│ ├── script.js
│ └── admin.js
│
└── README.md`


---

## 📄 Description of Important Files

### server.js
- Entry point of the backend
- Starts Express server on port **3000**

### app.js
- Creates Express application
- Registers middleware
- Serves static frontend files from `public` folder
- Mounts complaint routes

### routes/complaint.routes.js
- Defines REST API routes
- Connects routes to controller functions

### controllers/complaint.controller.js
- Contains complaint logic
- Stores complaint data in memory
- Handles:
  - Create complaint
  - Get all complaints
  - Update complaint status
  - Delete complaint

### middleware/logger.middleware.js
- Logs HTTP request method and URL

### middleware/auth.middleware.js
- Demonstration middleware used for update/delete routes

---

## 🌐 Frontend

### User Portal (index.html)
- Allows users to submit complaints
- Performs form validation before submission
- Sends data to backend using Fetch API

### Admin Dashboard (admin.html)
- Displays all complaints dynamically
- Dashboard cards show:
  - Total complaints
  - Pending complaints
  - Resolved complaints
  - Rejected complaints
- Supports:
  - Status updates (Pending / Resolved / Rejected)
  - Filtering by status
  - Searching by ID, Name, or Title
  - Dynamic UI updates after status change

---

## 📌 Complaint Object Structure
```json
{
  "id": number,
  "name": string,
  "email": string,
  "title": string,
  "description": string,
  "status": "PENDING" | "RESOLVED" | "REJECTED",
  "submittedAt": string
}
