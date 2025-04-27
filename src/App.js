import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="main-container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
