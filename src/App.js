import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/page2' element={<Page2/>}/>
      <Route path='/page3' element={<Page3/>}/>
      <Route path='/page4' element={<Page4/>}/>
    </Routes>
    <Navbar/>
    </>
  );
}

export default App;
