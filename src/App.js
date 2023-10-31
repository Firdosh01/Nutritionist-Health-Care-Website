import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Team from './components/Pages/Team';
import Process from './components/Pages/Process';
import Pricing from './components/Pages/Pricing';
import Blog from './components/Pages/Blog';

function App() {
  return (
    <div className='bg-[#EEEEEE] w-screen min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='team' element={<Team />} />
        <Route path='process' element={<Process />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='blog' element={<Blog />} />
      </Routes>

    </div>
  );
}

export default App;
