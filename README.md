# NovaChat

NovaChat is a simple AI chatbot web application built using React, Node.js, Express, and the Gemini API.

Users can ask questions and get AI-generated responses in real time.

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Gemini API

---

## Features

- AI-generated responses
- Clean and responsive UI
- Markdown response rendering
- Loading state handling
- Separate frontend and backend deployment

---

## Project Structure

```bash
NovaChat/
│
├── client/   # React frontend
│
└── server/   # Express backend
```

---

## Environment Variables

### Client (.env)

```env
VITE_API_URL=your_backend_url
```

### Server (.env)

```env
PORT=8001
KEY=your_gemini_api_key
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/sooobhyadav/novachat.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Deployment

- Frontend deployed on Vercel
- Backend deployed on Railway

---

## Live Demo

Frontend: https://novachat-kohl.vercel.app/

Backend: https://novachat-production-4120.up.railway.app

