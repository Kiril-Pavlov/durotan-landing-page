import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
import Pages from './pages/Pages/Pages';
import Products from './pages/Product/Products';

import { Route, Routes, Navigate } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/pages' element={<Pages/>} />
      </Routes>
    </div>
  );
}

export default App;
