import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Store/useAuth.js";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { login, register } = useAuth();

  const handleLogin = () => {
    login(data);
    navigate("/");
  };
  const handleRegister = () => {
    register(data);
  };
  return (
    <div className="bg-black h-full w-full justify-center items-center">
      <div className="h-1/2 w-1/2">
        <h1>LoginSide</h1>
        <input
          className="text-white"
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="text-white"
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="h-1/2 w-1/2">
        <h1>Register Side</h1>
        <input
          className="text-white"
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          className="text-white"
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="text-white"
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
export default SignIn;
