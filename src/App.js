import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import SaveAMeal from './SaveAMeal';
import Home from './Home';
import Partners from './Partners';
import AboutUs from './AboutUs';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import AdminSignup from './AdminSignup';
import ProblemForm from './ProblemForm';

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/SaveAMeal" element={<SaveAMeal />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ReportAProblem" element={<ProblemForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
        <Route path="/dashboard/:section" element={<Dashboard />} />    
            <Route path="/" element={<Home />} />
      </Routes>
    </Router>
 );
}

export default App;