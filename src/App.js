import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/Home.view';
import AboutView from './views/About.view';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </Router>
  );

}

export default App;
