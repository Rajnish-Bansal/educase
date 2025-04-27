import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    navigate("/profile");
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create your PopX account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        {[
          {
            label: "Full Name",
            name: "fullName",
            placeholder: "Enter full name",
          },
          { label: "Phone Number", name: "phone", placeholder: "Enter number" },
          {
            label: "Email Address",
            name: "email",
            placeholder: "Enter email address",
          },
          {
            label: "Password",
            name: "password",
            placeholder: "Enter password",
            type: "password",
          },
          {
            label: "Company Name",
            name: "company",
            placeholder: "Enter company name",
          },
        ].map(({ label, name, placeholder, type = "text" }) => (
          <fieldset key={name} className="register-fieldset">
            <legend className="register-legend">
              {label} <span className="required">*</span>
            </legend>

            <input
              type={type}
              placeholder={placeholder}
              {...register(name, { required: `${label} is required` })}
              className="register-input"
            />
          </fieldset>
        ))}

        {Object.entries(errors).map(([key, error]) => (
          <p key={key} className="register-error">
            {error.message}
          </p>
        ))}

        <label className="register-label">
          Are you an Agency? <span className="required">*</span>
        </label>

        <div className="register-radio-group">
          {["Yes", "No"].map((option) => (
            <label key={option} className="register-radio-label">
              <input
                type="radio"
                {...register("agency", {
                  required: "Please select an option",
                })}
                value={option}
                className="register-radio"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.agency && (
          <p className="register-error">{errors.agency.message}</p>
        )}

        <div className="register-button-container">
          <button
            type="submit"
            disabled={!isValid}
            className={`register-button ${
              isValid ? "register-button-active" : "register-button-disabled"
            }`}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
