import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <h1>Welcome to Familycare Heaven Hospital</h1>
        <p>Where Compassion Meets Excellence in Healthcare</p>
      </header>

      {/* Introduction */}
      <section className="about-intro">
        <h2>Who We Are</h2>
        <p>
          Familycare Heaven Hospital is a world-class medical institution dedicated to providing
          high-quality, compassionate, and advanced healthcare services. Our commitment to
          excellence and patient-centered care ensures we meet the evolving healthcare needs of our
          community and beyond.
        </p>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="about-mvv">
        <div className="mvv-card">
          <h3>🌍 Our Mission</h3>
          <p>
            To enhance the health and well-being of individuals by delivering outstanding
            patient-centered care, fostering medical innovation, and ensuring accessibility for all.
          </p>
        </div>
        <div className="mvv-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To be a leader in global healthcare, pioneering medical breakthroughs while
            upholding the highest ethical standards.
          </p>
        </div>
        <div className="mvv-card">
          <h3>💡 Core Values</h3>
          <ul>
            <li><strong>Compassion:</strong> Treating every patient with care and dignity.</li>
            <li><strong>Innovation:</strong> Adopting cutting-edge medical technologies.</li>
            <li><strong>Integrity:</strong> Upholding transparency and ethics in all that we do.</li>
            <li><strong>Excellence:</strong> Striving for the highest standards in patient care and medical outcomes.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Familycare Heaven Hospital?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>🔬 Advanced Medical Technology</h3>
            <p>
              We leverage the latest medical technologies to provide precise diagnosis and
              effective treatments, ensuring the highest level of care.
            </p>
          </div>
          <div className="why-card">
            <h3>👨‍⚕️ Expert Specialists</h3>
            <p>
              Our doctors and healthcare professionals are renowned experts in their fields,
              committed to delivering top-notch care with a focus on patient well-being.
            </p>
          </div>
          <div className="why-card">
            <h3>🏥 Comprehensive Services</h3>
            <p>
              From emergency care to specialized surgeries and rehabilitation, we offer a full
              range of healthcare services, all under one roof.
            </p>
          </div>
          <div className="why-card">
            <h3>📊 Patient-Centric Approach</h3>
            <p>
              We prioritize personalized care and ensure each patient feels heard, valued, and
              comfortable throughout their treatment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="about-departments">
        <h2>Our Specialized Departments</h2>
        <ul>
          <li>🫀 Cardiology</li>
          <li>🧠 Neurology</li>
          <li>🏥 Emergency & Trauma</li>
          <li>🤰 Maternity & Childcare</li>
          <li>🦴 Orthopedics</li>
          <li>👁️ Ophthalmology</li>
          <li>🦷 Dentistry</li>
        </ul>
      </section>

      {/* Contact & CTA */}
      <section className="about-contact">
        <h2>Connect With Us</h2>
        <p>
          Need expert medical care? Our compassionate staff is ready to assist. Get in touch with
          us to schedule an appointment and begin your journey toward better health.
        </p>
        <a href="/contact" className="contact-btn">Book an Appointment</a>
      </section>
    </div>
  );
};

export default About;
