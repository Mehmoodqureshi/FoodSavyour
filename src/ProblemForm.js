import "./ProblemForm.css";
import React, { useState } from "react";
import { db } from "./firebase";

function ProblemForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    problemFaced: "",
  });

  // State to control the display of the submission message
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Problems")
      .add(formData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        // Reset the form state
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          problemFaced: "",
        });

        // Display the submission message
        setSubmissionMessage("Form Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="problem-form-container">
      <div className="heading-container">
        <h2 className="heading">Report Form</h2>
        {submissionMessage && (
          <p className="submission-message">{submissionMessage}</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="problem-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <textarea
          name="problemFaced"
          placeholder="Problem Faced"
          value={formData.problemFaced}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProblemForm;
