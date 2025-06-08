import { useState } from "react";
import useAuth from "./Store/useAuth.js";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    login(user);
  };

  return (
    <div>
      <h1>Check the console</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
