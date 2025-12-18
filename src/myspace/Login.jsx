import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ email: "", password: "", pin: "" });
  const backgroundImageUrl = "src/assets/images/bg.jpg";
  const navigate = useNavigate();

  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleSignupChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    alert("Logged in successfully!");
    navigate("/dashboard/home");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup Data:", signupData);
    alert(`Account created! Your PIN: ${signupData.pin}`);
    setIsLogin(true);
  };

  return (
    <div className="vh-100 d-flex">
      {/* Left side: Logo / Company Name */}
      <div className="col-md-7 d-flex flex-column justify-content-center align-items-center text-white p-5"  style={{
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
        <h1 className="display-4 mb-3">Verva Corporation</h1>
        <p className="lead text-center">
          Welcome to Verva Corporation dashboard! Manage your projects, accounts, and more.
        </p>
      </div>

      {/* Right side: Login / Signup form */}
      <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
        <div className="card shadow p-5" style={{ minWidth: "350px", width: "100%" }}>
          <h3 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h3>

          {isLogin ? (
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="form-control"
                  required
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>Set PIN (4 digits)</label>
                <input
                  type="password"
                  name="pin"
                  value={signupData.pin}
                  onChange={handleSignupChange}
                  className="form-control"
                  maxLength={4}
                  pattern="\d{4}"
                  placeholder="1234"
                  required
                />
              </div>
              <button className="btn btn-success w-100" type="submit">
                Sign Up
              </button>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
