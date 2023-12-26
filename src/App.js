import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Navbar } from './navbar/Navbar';
import { Services } from './pages/services/Services';
import { Contact } from './pages/contact/Contact';
import { Equipe } from './pages/equipe/Equipe';
import { Portfolio } from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="equipe" element={<Equipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
