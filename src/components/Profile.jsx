import React from "react";
import { FaCamera } from "react-icons/fa";
import "./Profile.css";
import img from "../assets/profile.png";
const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Account Settings</h1>

      <div className="profile-card">
        <div className="profile-image-container">
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqO4BvvzIaRR17qdLgDPp2MdD4odVN_bvhw&s"
            src={img}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-camera-icon">
            <FaCamera className="camera-icon" />
          </div>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">Marry Doe</h2>
          <p className="profile-email">Marry@Gmail.com</p>
        </div>
      </div>

      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div className="profile-divider"></div>
      <div className="profile-divider2"></div>
    </div>
  );
};

export default Profile;
