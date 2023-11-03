import React from 'react';
import './App.css';
import Home from './Home';
import Host from './Host';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Details from './Details';
import Privacy from './Privacy';
import Terms from './Terms';
import About from './About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './Book';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/:jobTitle" element={<Details />} />

          <Route path="/" element={<Home />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about-us" element={<About />} />

          <Route path="/host" element={<Host />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
