import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <img height="600px" width="100%" src='https://www.velvetech.com/wp-content/uploads/2022/05/hospital-management-system-fb.png'></img>
            <div className="home-container">
            <h1 className="welcome-title">Welcome to Our Phoenix Healthcare Services Hospital</h1>
            <p className="welcome-message">
                We are dedicated to providing the best care for our patients. Schedule your appointment today!
            </p>
            <div className="animation-container">
                <Link to={"/register"}  className="animated-box">Patient Registration</Link>
                <Link to={"/contact"} className="animated-box">Appointment Scheduling</Link>
                <Link to={"/consultation"}  className="animated-box">Consultation</Link>
                <Link to={"/patients records"}  className="animated-box">Medical Records</Link>
            </div>
        </div>
   
        </>
     );
};

export default Home;
