import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-component">
      <h1 className="home-title">Welcome to PopX</h1>
      <p className="home-description">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>

      <section className="home-buttons">
        <button
          className="create-account-button"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>
        <button
          className="login-button-home"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </section>
    </div>
  );
};

export default Home;
