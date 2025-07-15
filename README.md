# 💬 Real-Time Chat App  
A full-stack real-time chat application built with **React**, **Node.js**, **Express**, **Socket.IO**, and **MongoDB**. Styled using **Tailwind CSS** and managed with **Zustand** for state management.  

## 🚀 Features  
- 🔐 User Authentication (JWT)  
- 📧 Register / Login  
- 👥 Search & select users  
- 💬 Real-time messaging via Socket.IO  
- 🧠 Zustand state management  
- 🌙 Dark mode-friendly UI (DaisyUI / Tailwind)  
- ⚙️ Responsive design  

## 🛠 Tech Stack  
**Frontend:** React.js, Tailwind CSS + DaisyUI, Zustand, Vite  
**Backend:** Node.js + Express.js, MongoDB + Mongoose, Socket.IO, JWT Authentication  

## 📦 Project Structure  
`Chat/ ├── client/ ├── Modules/ ├── Routes/ ├── Middleware/ ├── socket.js └── index.js`  

## 🧪 Local Development  
1. Clone the repo:  
`git clone https://github.com/WaelAlturi/Chat.git && cd Chat`  
2. Install backend dependencies:  
`npm install`  
3. Install frontend dependencies and start dev server:  
`cd client && npm install && npm run dev`  
4. Create `.env` file in the root:  
`MONGO_URL=your_mongodb_connection_string`  
`JWT_KEY=your_jwt_secret`  
`PORT=3000`  

## 🧑‍💻 Scripts  
- `npm run dev` (inside `/client`) – Vite dev server  
- `npm run start` (from root) – starts Express backend  

## 🌍 Deployment  
Deployed on Render  
🔗 Live: [https://chat-1-q1oo.onrender.com](https://chat-1-q1oo.onrender.com)  

## 🙌 Author  
Made with ❤️ by [Wael Alturi](https://github.com/WaelAlturi)