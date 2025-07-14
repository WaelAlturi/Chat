import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Store/useAuth.js";
import toast, { Toaster } from "react-hot-toast";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(true);
  const { login, register } = useAuth();
  const handleLogin = () => {
    login(data);
    navigate("/");
  };
  const handleRegister = async () => {
    const { username, email, password } = data;

    if (!username || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      await register(data);
      setData({ username: "", email: "", password: "" });
      setStatus(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row relative w-full justify-center items-center">
        <div
          className={`flex flex-col lg:flex-row  gap-2 absolute justify-center items-center transition-opacity duration-700 ease-in-out ${
            status ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now 🔐</h1>
            <p className="py-6">
              ChatterBox is your new favorite place to connect 🤝
              <br />
              Enjoy smooth, real-time conversations fast ⚡
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <fieldset className="form-control">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <button className="btn btn-neutral mt-4" onClick={handleLogin}>
                  Login
                </button>
              </fieldset>
              <p className="mt-4 text-sm text-center">
                Don’t have an account?
                <button
                  onClick={() => setStatus(false)}
                  className="ml-1 text-primary hover:underline"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row absolute gap-2 justify-center items-center transition-opacity duration-700 ease-in-out ${
            !status ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-4xl font-bold">Join ChatterBox 📝</h1>
            <p className="py-6">
              Sign up to start chatting with friends in real time 💬
              <br />
              Simple, fast, and full of good vibes 🎉
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <fieldset className="form-control">
                <label className="label">Username</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Username"
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
                <button
                  className="btn btn-neutral mt-4"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </fieldset>
              <p className="mt-4 text-sm text-center">
                Already have an account?
                <button
                  onClick={() => setStatus(true)}
                  className="ml-1 text-primary hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
export default SignIn;
