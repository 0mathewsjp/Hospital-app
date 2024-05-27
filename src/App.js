import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Faq from './components/Faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<Service/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/faq' element={<Faq/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
