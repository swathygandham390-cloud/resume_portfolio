import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you! Your inquiry has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonStyle = {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    width: "fit-content",
  };

  return (
    <section className="section" id="contact" style={{ padding: "40px 20px" }}>
      <h2 className="section-title" style={{ textAlign: "center" }}>
        Contact Me
      </h2>

      <div
        className="contact-layout"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "30px auto",
        }}
      >
        {/* Info Card */}
        <div className="card contact-links" style={{ maxWidth: "300px" }}>
          <h3>Reach me</h3>
          <p>Email: swathygandham390@gmail.com</p>
          <p>Phone: +91 9701301192</p>
          <p>Location: Andhra Pradesh, India</p>
          
            < a href="https://www.linkedin.com/in/swathy-gandham-87627b28b"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: "8px" }}
          >
            LinkedIn
          </a>
          
            <a href="https://github.com/swathygandham390-cloud?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: "4px" }}
          >
            GitHub
          </a>
        </div>

        {/* Inquiry Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={{ ...inputStyle, resize: "vertical" }}
            name="message"
            rows="5"
            placeholder="Your inquiry / message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" style={buttonStyle}>
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;



