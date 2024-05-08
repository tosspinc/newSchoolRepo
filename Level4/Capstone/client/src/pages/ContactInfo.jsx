  import React, { useState } from "react";

  export default function ContactInfo() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log(formData); // For testing purposes, log form data
    };

    return (
      <form className="contact_form_container" onSubmit={handleSubmit}>
        <label className="form-label">
          First Name:
          <input className="first-name-input-box" 
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Last Name: 
          <input className="last-name-input-box"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input className="email-input-box"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Message:
          <textarea className="form-message-text-box"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="contact_button" type="submit">Submit</button>
      </form>
    );
  }
