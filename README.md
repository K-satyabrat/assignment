# Coderower Assignment

This project is a full-stack application for managing configuration data, built with Node.js (Express, MongoDB) for the backend and React for the frontend.

## Project Structure

```
coderower/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   └── connectDb.js
│   ├── controllers/
│   │   └── configurationController.js
│   ├── models/
│   │   └── configurationModel.js
│   └── routes/
│       └── configurationRoutes.js
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── pages/
    │   │   ├── FetchConfig.jsx
    │   │   └── UpdateConfig.jsx
    │   └── lib/
    │       └── axiosInstance.js
    ├── public/
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Backend
- **Node.js, Express, MongoDB**
- REST API for configuration data
- Key files:
  - `server.js`: Entry point
  - `controllers/configurationController.js`: Handles GET and UPDATE requests
  - `models/configurationModel.js`: Mongoose schema
  - `routes/configurationRoutes.js`: API routes
  - `config/connectDb.js`: MongoDB connection

### Running the Backend
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Set up your `.env` file with MongoDB URI and other configs.
3. Start the server:
   ```bash
   npm start
   ```

## Frontend
- **React (Vite)**
- Fetches and updates configuration data via API
- Key files:
  - `src/pages/FetchConfig.jsx`: Fetches configuration
  - `src/pages/UpdateConfig.jsx`: Updates remarks
  - `src/lib/axiosInstance.js`: Axios setup

### Running the Frontend
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `GET /api/configuration/:id` — Fetch configuration by ID
- `PUT /api/configuration/:id` — Update remark for configuration

