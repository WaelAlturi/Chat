import Login from "./pages/LoginPage.jsx";
import Home from "./pages/HomePage.jsx";
import useAuth from "./Store/useAuth.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
export default function App() {
  const { authUser } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
