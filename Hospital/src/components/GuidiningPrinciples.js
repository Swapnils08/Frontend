import React from "react";
import "../styles/GuidingPrinciple.css";

const principles = [
  {
    title: "Patient-Centered Care",
    description: "Prioritize patient needs, safety, and well-being through efficient hospital services and compassionate care."
  },
  {
    title: "Operational Efficiency",
    description: "Enhance hospital workflows, reduce wait times, and optimize resource allocation for improved patient outcomes."
  },
  {
    title: "Transparency & Integrity",
    description: "Maintain clear, honest communication among staff, patients, and stakeholders while upholding ethical medical practices."
  },
  {
    title: "Data Security & Privacy",
    description: "Ensure the confidentiality and security of patient records through strict compliance with healthcare regulations."
  },
  {
    title: "Innovation & Technology",
    description: "Leverage cutting-edge technology to improve medical services, hospital operations, and patient care experiences."
  },
  {
    title: "Regulatory Compliance",
    description: "Adhere to national and international healthcare standards, ensuring legal and ethical hospital management."
  }
];

const GuidingPrinciples = () => {
  return (
    <div className="principles-wrapper">
      <div className="title-section">
        <h1>Phoenix Healthcare Services</h1>
        <h2>Guiding Principles</h2>
      </div>
      <section className="principles-grid">
        {principles.map((principle, index) => (
          <div key={index} className="principle-item">
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GuidingPrinciples;