import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/Home.view';
import AboutView from './views/About.view';
import React from 'react';

function App() {
  return (

    <Routes>
      <Route path="/" exact element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
    </Routes>
    // <AboutView />
  );
}

export default App;
