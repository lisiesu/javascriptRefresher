# Notes App

A simple full-stack Notes application where users can add, update, and delete notes. The frontend is built using React (with Vite), the backend with Node.js, and the database is PostgreSQL.

This project is part of the `Javascript Refresher` repository, where multiple small projects are organized into separate folders.

## Features
- Create new notes
- Edit existing notes
- Delete notes
- Store notes in a PostgreSQL database

## Tech Stack
- **Frontend:** React (Created with Vite)
- **Backend:** Node.js with Express
- **Database:** PostgreSQL

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vite](https://vitejs.dev/)

### Installation

#### 1. Navigate to the project folder
Since this project is part of `JavascriptProjects`, navigate to its folder:
```bash
cd Javascript Refresher/notes-app
```

#### 2. Setting up the Backend

Navigate to the backend folder:
```bash
cd notes-backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file and configure your PostgreSQL connection:
```
DATABASE_URL=postgres://username:password@localhost:5432/notes_db
PORT=5000
```

Run database migrations (if applicable):
```bash
npx sequelize-cli db:migrate
```

Start the backend server:
```bash
npm start
```

#### 3. Setting up the Frontend

Navigate to the frontend folder:
```bash
cd ../notes-frontend
```

Install dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

The frontend will be running on `http://localhost:5173/` (default Vite port), and the backend on `http://localhost:5000/`.

## API Endpoints

| Method | Endpoint       | Description        |
|--------|---------------|--------------------|
| GET    | `/notes`      | Get all notes      |
| POST   | `/notes`      | Create a new note  |
| PUT    | `/notes/:id`  | Update a note      |
| DELETE | `/notes/:id`  | Delete a note      |

## Folder Structure
```
JavascriptProjects/
│── notes-app/
│   │── notes-backend/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── server.js
│   │   ├── package.json
│   │
│   │── notes-frontend/
│   │   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── vite.config.js
│   │   ├── package.json
│   │
│   └── README.md
```

## Future Enhancements
- User authentication (sign in/sign up)
- Cloud database integration
- Notes categorization

## License
This project is licensed under the MIT License.

---

Happy Coding! 🚀

