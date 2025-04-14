import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookRoom from './pages/BookRoom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookRoom />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;