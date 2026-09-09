import { Link } from "react-router-dom";
import { useState } from "react";

function DonorRegistration() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="auth-page donor-page">
      <div className="auth-card donor-card">
        <div className="icon-circle blue">●</div>
        <h1>Donor Registration</h1>
        <p className="subtitle">Join us in making a difference. Register as a donor<br />to support meaningful causes.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="section-title">Personal Information</h2>

          <div className="form-grid two">
            <Input label="Full Name" placeholder="Enter full name" required />
            <Input label="Email Address" type="email" placeholder="Enter email address" required />
            <Input label="Phone Number" placeholder="Enter phone number" required />
            <Input label="Date of Birth" type="date" required />
          </div>

          <Input label="Address" placeholder="Enter complete address" required />

          <div className="form-grid three">
            <Select label="State" options={["Select state", "Telangana", "Andhra Pradesh", "Karnataka"]} />
            <Select label="City" options={["Select city", "Hyderabad", "Warangal", "Bengaluru"]} />
            <Input label="PIN Code" placeholder="Enter PIN code" required />
          </div>

          <h2 className="section-title">Account Information</h2>

          <div className="form-grid two">
            <PasswordInput
              label="Password"
              placeholder="Create password"
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              show={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="why-box">
            <strong>🛡 Why Register?</strong>
            <ul>
              <li>Secure donations and support verified NGOs</li>
              <li>Track your donations and view their impact</li>
              <li>Get transaction receipts and blockchain verification</li>
              <li>Receive updates on causes you support</li>
            </ul>
          </div>

          <label className="checkbox-line">
            <input type="checkbox" />
            <span>I agree to the <b>Terms & Conditions</b> and <b>Privacy Policy.</b></span>
          </label>

          <button className="primary-button blue-button">Register as Donor</button>
        </form>

        <p className="bottom-text">Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </section>
  );
}

function Input({ label, type = "text", placeholder, required = false }) {
  return (
    <label className="field">
      <span>{label} {required && <i>*</i>}</span>
      <input type={type} placeholder={placeholder} required={required} />
    </label>
  );
}

function Select({ label, options }) {
  return (
    <label className="field">
      <span>{label} <i>*</i></span>
      <select defaultValue={options[0]}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function PasswordInput({ label, placeholder, show, onToggle }) {
  return (
    <label className="field">
      <span>{label} <i>*</i></span>
      <div className="password-wrap">
        <input type={show ? "text" : "password"} placeholder={placeholder} />
        <button type="button" className="eye-button" onClick={onToggle}>◌</button>
      </div>
    </label>
  );
}

export default DonorRegistration;