import { useEffect, useState, createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart';
import { DataProvider } from './DataContext';


const  App = () => {

  return  (
    <div className="app" > 
      <DataProvider>       
        <Router>
          <Header />
          <Routes>         
            <Route path='/' element={<Home />}/>
            <Route path='/Clothes' element={<Products />}/>
            <Route path='/Electronics' element={<Products />}/>
            <Route path='/Furniture' element={<Products />}/> 
            <Route path='/Shoes' element={<Products />}/> 
            <Route path='/Others' element={<Products />}/>   
            <Route path='/Cart' element={<Cart />} />  
          </Routes>
          <Footer />     
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;