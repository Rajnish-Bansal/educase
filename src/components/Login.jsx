import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    navigate("/profile");
  };

  return (
    <div className="login-container">
      {/* Heading */}
      <h2 className="login-title">Sign in to your PopX account</h2>
      <p className="login-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* Email Field */}
        <fieldset className="login-fieldset">
          <legend className="login-legend">Email Address</legend>
          <input
            type="email"
            placeholder="Enter email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            className="login-input"
          />
        </fieldset>
        {errors.email && <p className="login-error">{errors.email.message}</p>}

        {/* Password Field */}
        <fieldset className="login-fieldset">
          <legend className="login-legend">Password</legend>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
            })}
            className="login-input"
          />
        </fieldset>
        {errors.password && (
          <p className="login-error">{errors.password.message}</p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`login-button ${
            isValid ? "login-button-active" : "login-button-disabled"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
