import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './homePage';
import CreatePlayerPage from './addPlayerPage';
import EditPlayerPage from './editPlayerPage';
import SearchPlayerPage from './searchPlayerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePlayerPage />} />
        <Route path="/edit" element={<EditPlayerPage />} />
        <Route path="/search" element={<SearchPlayerPage />} />
      </Routes>
    </Router>
  );
}


export default App;
