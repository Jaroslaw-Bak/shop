import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Home from './components/Home/Home'
import data from './data'


// https://api.escuelajs.co/api/v1/products'


const  App = () => {

    const [ products, setProducts] = useState(data)
    
    const categoryHandler = (category) => {
       filterData(category)

    }

    const filterData = (category) => {
        const categoryData = data.filter((item) => {
          return item.category.name === category 
        })
        setProducts(categoryData)
       
    }

  return (
    <div className="app">
      <Router >
        <Header />
        <Menu categoryHandler={categoryHandler} />
        <Routes>
          <Route path='/' element={<Home data={products} />}/>
          <Route path='/products' element={<Products data={products} />} />
        </Routes>
        <Footer />     
      </Router>
    </div>
  );
}

export default App;