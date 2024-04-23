import React from "react";
import heroImage from "./assets/Hero.jpeg"
import "./Home.css"
import Footer from "./Footer"


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
          <div className="hero-image">
            <img src={heroImage} alt="Hero" style={{ width: '100%', height: 'auto' }} />
          </div>
        <div className="container">
          <div className="hero-content">
            <h1>Save Food, Save the Planet</h1>
            <p>
              Join us in our mission to reduce food waste and make a positive
              impact on the environment.
            </p>
          </div>
        </div>
      </section>
      <div className="services-heading">
        <h2>Services</h2>
      </div>
      {/* Cards Section */}
      <section className="cards">
        <div className="container">
          <div className="card">
            <h2>Meal Planning</h2>
            <p>
              Learn how to plan your meals effectively to avoid overbuying and
              wasting food.
            </p>
          </div>
          <div className="card">
            <h2>Storage Tips</h2>
            <p>
              Discover the best ways to store different types of food to prolong
              their freshness.
            </p>
          </div>
          <div className="card">
            <h2>Recipes</h2>
            <p>
              Explore delicious recipes that help you utilize leftover
              ingredients creatively.
            </p>
          </div>
          <div className="card">
            <h2>Community</h2>
            <p>
              Connect with like-minded individuals and share your food-saving
              tips and experiences.
            </p>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
