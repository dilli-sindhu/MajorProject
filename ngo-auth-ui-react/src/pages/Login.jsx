import { useState } from "react";
import { Link } from "react-router-dom";

const roles = [
  { key: "admin", label: "Admin", icon: "●" },
  { key: "ngo", label: "NGO", icon: "🏛" },
  { key: "donor", label: "Donor", icon: "●" }
];

function Login() {
  const [role, setRole] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="auth-page login-page">
      <div className="auth-card login-card">
        <div className="icon-circle purple">♙</div>
        <h1>Welcome Back!</h1>
        <p className="subtitle">Login to your account and continue making<br />a difference.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label className="login-label">Login as <i>*</i></label>

          <div className="role-grid">
            {roles.map((item) => (
              <button
                type="button"
                key={item.key}
                className={`role-card ${role === item.key ? "selected" : ""}`}
                onClick={() => setRole(item.key)}
              >
                <span className="role-icon">{item.icon}</span>
                <strong>{item.label}</strong>
                {role === item.key && <span className="selected-mark">✓</span>}
              </button>
            ))}
          </div>

          <label className="field login-field">
            <span>Email Address <i>*</i></span>
            <div className="input-icon">
              <span>✉</span>
              <input type="email" placeholder="Enter your email" required />
            </div>
          </label>

          <label className="field login-field">
            <span>Password <i>*</i></span>
            <div className="input-icon">
              <span>▣</span>
              <input type={showPassword ? "text" : "password"} placeholder="Enter your password" required />
              <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                ◌
              </button>
            </div>
          </label>

          <div className="login-options">
            <label className="remember"><input type="checkbox" /> Remember me</label>
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button className="primary-button purple-button">Login</button>

          <div className="or-divider"><span>or</span></div>

          <button type="button" className="google-button">
            <span className="google-g">G</span> Login with Google
          </button>
        </form>

        <p className="bottom-text">Don't have an account?</p> 
        <Link to="/donor-register" className="secondary-button">Register</Link>
         <Link to="/ngo-register" className="secondary-button">Register</Link>
      </div>
    </section>
  );
}

export default Login;