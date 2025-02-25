import React from "react";
import { useForm } from "react-hook-form";
import "../styles/PatientRegistration.css"; // Import CSS

const PatientRegistration = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    alert("Patient Registered: " + JSON.stringify(data));
    reset(); // Clears form fields after submission
  };

  return (
    <div className="patient-form-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" {...register("name", { required: true })} placeholder="Enter your full name" />
          {errors.name && <p className="error-message">Name is required</p>}
        </div>

        <div className="input-group">
          <label>Age</label>
          <input type="number" {...register("age", { required: true })} placeholder="Enter your age" />
          {errors.age && <p className="error-message">Age is required</p>}
        </div>

        <div className="input-group">
          <label>Disease (if any)</label>
          <input type="text" {...register("disease")} placeholder="Enter disease (optional)" />
        </div>

        <div className="input-group">
          <label>Contact Number</label>
          <input type="text" {...register("contact", { required: true })} placeholder="Enter contact number" />
          {errors.contact && <p className="error-message">Contact is required</p>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
