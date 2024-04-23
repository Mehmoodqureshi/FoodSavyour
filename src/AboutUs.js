import React, { useState } from 'react';
import AboutUsimage from "./assets/AboutUsImage.jpg";
import './AboutUs.css'; 
import { db } from './firebase'; // Import the Firestore instance

function AboutUs() {
 const [suggestion, setSuggestion] = useState('');
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [subject, setSubject] = useState('');

 // State to control the display of the submission message
 const [submissionMessage, setSubmissionMessage] = useState("");

 const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log(name, email, subject, suggestion);

    try {
      // Save the form data to the Firestore database
      await db.collection('Suggestions').add({
        name: name,
        email: email,
        subject: subject,
        suggestion: suggestion,
      });

      // Reset the form state
      setSuggestion('');
      setName('');
      setEmail('');
      setSubject('');

      // Display the submission message
      setSubmissionMessage("Form Submitted");
    } catch (error) {
      console.error('Error adding document: ', error);
    }
 };

 const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 }
 return (
    <>
      <div className="about-container">
      <div className="row1">
        <div className="about-text">
          <h1 className="about-heading">Our Mission</h1>
          <p>At FoodSavyour, our mission is simple: to stop good food from going to waste. We bring together hotels, restaurants, and event places with food donation groups, making it easy for them to share leftover food. Imagine you're at a wedding, and there's extra food. Instead of tossing it away, our platform helps connect that food with people who can use it. We use smart technology to make sure everything runs smoothly, so that food gets to those who really need it.

          Our website acts as a central spot where businesses can ask for help with their surplus food. We believe that no good food should ever end up in the trash when there are people out there who could enjoy it. By working together, we're not just cutting down on waste; we're also making sure that everyone has access to nutritious meals. It's a win-win situation for everyone involved!

          Join us in our mission to reduce food waste and make a positive impact in our communities. Together, we can turn excess food into a source of hope and nourishment for those in need. Let's make a difference, one meal at a time, with FoodSavyour.</p>
        </div>
        <div className="about-image">
          <img src={AboutUsimage} alt="About Us" />
        </div>
      </div>
        <div className="row2">
          <div className="suggestion-form">
          <div className="heading-container">
              <h2 className="form-heading">Suggestion Form</h2>
              {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
              </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label htmlFor="suggestion">Your Suggestion:</label>
              <textarea
                id="suggestion"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                rows="4"
                cols="50"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        
      </div>
      
    </>
 );
}

export default AboutUs;
