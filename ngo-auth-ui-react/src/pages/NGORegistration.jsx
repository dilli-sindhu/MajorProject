import { useState } from "react";
import { Link } from "react-router-dom";

const documents = [
  "Registration Certificate",
  "PAN Card",
  "12A Certificate (Income Tax)",
  "80G Certificate (Income Tax)",
  "Trust / Society / NGO By-laws",
  "Bank Account Proof"
];

function NGORegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [files, setFiles] = useState({});

  const handleFile = (name, file) => {
    setFiles((old) => ({ ...old, [name]: file?.name || "" }));
  };

  return (
    <section className="auth-page ngo-page">
      <div className="auth-card ngo-card">
        <div className="icon-circle green">🏛</div>
        <h1>NGO Registration</h1>
        <p className="subtitle">Register your NGO to create campaigns and make an impact.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <SectionTitle>NGO Information</SectionTitle>

          <div className="form-grid two">
            <Input label="NGO Name" placeholder="Enter NGO name" required />
            <Input label="Registration Number" placeholder="Enter registration number" required />
            <Input label="Email Address" type="email" placeholder="Enter email address" required />
            <Input label="Phone Number" placeholder="Enter phone number" required />
          </div>

          <Input label="Address" placeholder="Enter complete address" required />

          <div className="form-grid three">
            <Select label="State" options={["Select state", "Telangana", "Andhra Pradesh", "Karnataka"]} />
            <Select label="City" options={["Select city", "Hyderabad", "Warangal", "Bengaluru"]} />
            <Input label="PIN Code" placeholder="Enter PIN code" required />
          </div>

          <Input label="Website (Optional)" placeholder="Enter website URL" />

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

          <SectionTitle>Upload Documents</SectionTitle>
          <div className="document-list">
            {documents.map((doc) => (
              <label className="document-row" key={doc}>
                <span className="document-info">
                  <span className="doc-icon">▣</span>
                  <span>
                    <strong>{doc} *</strong>
                    <small>Upload clear PDF/JPG/PNG (Max 5MB)</small>
                  </span>
                </span>
                <span className="file-button">
                  {files[doc] ? "Selected" : "Choose File"}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFile(doc, e.target.files[0])}
                  />
                </span>
              </label>
            ))}
          </div>

          <label className="checkbox-line">
            <input type="checkbox" />
            <span>I agree to the <b>Terms & Conditions</b> and <b>Privacy Policy.</b></span>
          </label>

          <button className="primary-button green-button">Register NGO</button>
        </form>

        <p className="bottom-text">Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
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
        <button type="button" className="eye-button" onClick={onToggle}>
          {show ? "◉" : "◌"}
        </button>
      </div>
    </label>
  );
}

export default NGORegistration;