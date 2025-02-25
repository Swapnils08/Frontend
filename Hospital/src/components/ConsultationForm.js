import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Consultation.css"; // Import separate CSS file

const Consultation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => alert("Consultation Submitted: " + JSON.stringify(data));

  return (
    <div className="consultation-form-container">
      <h2>Consultation Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Doctor's Name</label>
        <input type="text" {...register("doctorName", { required: true })} placeholder="Enter Doctor's Name" />
        {errors.doctorName && <p className="error-message">Doctor name is required</p>}

        <label>Patient Name</label>
        <input type="text" {...register("patientName", { required: true })} placeholder="Enter Patient's Name" />
        {errors.patientName && <p className="error-message">Patient name is required</p>}

        <label>Consultation Date</label>
        <input type="date" {...register("consultationDate", { required: true })} />
        {errors.consultationDate && <p className="error-message">Date is required</p>}

        <label>Consultation Notes</label>
        <textarea {...register("notes", { required: true })} placeholder="Enter consultation details"></textarea>
        {errors.notes && <p className="error-message">Notes are required</p>}

        <button type="submit">Submit Consultation</button>
      </form>
    </div>
  );
};

export default Consultation;
