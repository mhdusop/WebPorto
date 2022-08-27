import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Project from './pages/Project';
// import Skill from './pages/Skill';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticleBackground from './components/particleBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/>
        {/* <Route path="/skill" element={<Skill />}/> */}
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    <ParticleBackground />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
