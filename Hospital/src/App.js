import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';
import PatientRegistrationForm from './components/PatientRegistrationForm';
import ConsultationForm from './components/ConsultationForm';
import GuidingPrinciples from './components/GuidiningPrinciples';

// Lazy Loading Components
const About = lazy(() => import('./pages/About'));
const PatientList = lazy(() => import('./components/PatientList'));
const PatientDetails = lazy(() => import('./components/PatientDetails'));

const App = () => {
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/patients records" element={
                                selectedPatientId ? (
                                    <PatientDetails patientId={selectedPatientId} />
                                ) : (
                                    <PatientList onSelectPatient={setSelectedPatientId} />
                                )
                            } />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/register" element={<PatientRegistrationForm />} />
                            <Route path="/consultation" element={<ConsultationForm />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/guiding" element={<GuidingPrinciples />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;