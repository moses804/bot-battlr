# Bot Battlr

# React code challenge

**Date:** 19/10/2025
**By:** Moses Maina

**Bot Battlr** is a mini React web application that lets you build your own galactic bot army. You can browse bots, view detailed stats, enlist them into your army, release them, and even delete bots from the backend.

This project practices **React components, props, state, events, and data fetching**, while implementing both core and advanced features.

---

## Features

### Core Features

- View all bots in a **BotCollection**
- Enlist a bot into **YourBotArmy** by clicking it (once only)
- Release a bot from your army by clicking it
- Delete a bot entirely (backend + army) using the `x` button

### Advanced Features

- Click a bot to view detailed stats in **BotSpecs**
- Enlist bots directly from the detailed view
- Go back from detailed view to bot list
- Filter bots by class (`Support`, `Medic`, `Assault`, etc.)
- Sort bots by `health`, `damage`, or `armor`
- Only one bot per class can be enlisted at a time

---

## Tech Stack

- React (functional components + hooks)
- JSON Server (for backend)
- Vite (React project setup)
- Tailwind CSS (optional styling)

---

## ⚡ Installation & Setup

1. **Clone the repository**

git clone <YOUR-PRIVATE-REPO-URL>
cd bot-battlr

2. Install dependencies

npm install

3. Start the backend JSON server

json-server --watch db.json --port 8001

Visit: http://localhost:8001/bots
to see bot data

4. Start the frontend

npm run dev

Visit the URL displayed in terminal (usually http://localhost:5173)

## Usage

- Browse bots in the Available Bots section

- Click a bot - detailed view (BotSpecs)

- Enlist a bot - adds it to YourBotArmy

- Release a bot - removes it from your army

- Delete a bot - removes it from both army and backend

- Use the SortBar to filter or sort bots

## Project Structure

src/

- main.jsx
- App.jsx
- index.css
- components/ - BotCard.jsx - BotCollection.jsx - YourBotArmy.jsx - BotSpecs.jsx - SortBar.jsx
  db.json

## Notes

- State is managed in the App component

- All components are reusable and abstracted

- Fetch requests are handled in useEffect

## Optional Enhancements

- Sort and filter multiple classes at once

- Display a message when army is full or all classes are enlisted
