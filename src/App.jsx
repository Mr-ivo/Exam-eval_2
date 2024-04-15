import React from 'react';
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Login from "./Auth/Login";
import Home from './pages/Home';
import Details from './pages/Details ';


function App() {
  return (
    <div>

    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Details />} />
      

      </Routes>
    </Router>

    </div>

  );
}

export default App;
