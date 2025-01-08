import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/subcomponent/Navbar';
import './index.css';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className='bg-black'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
