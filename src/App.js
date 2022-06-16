import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';


// https://api.escuelajs.co/api/v1/products'

const  App = () => {

 const  data = [
    {
      "id": 1,
      "title": "Handcrafted Steel Gloves",
      "price": 135,
      "description": "The Football Is Good For Training And Recreational Purposes",
      "category": {
          "id": 2,
          "name": "Electronics",
          "image": "https://api.lorem.space/image/watch?w=640&h=480&r=9751"
      },
      "images": [
          "https://api.lorem.space/image/watch?w=640&h=480&r=1323",
          "https://api.lorem.space/image/watch?w=640&h=480&r=1047",
          "https://api.lorem.space/image/watch?w=640&h=480&r=7967"
      ]
  },
  {
      "id": 2,
      "title": "Refined Cotton Computer",
      "price": 535,
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "category": {
          "id": 2,
          "name": "Electronics",
          "image": "https://api.lorem.space/image/watch?w=640&h=480&r=9751"
      },
      "images": [
          "https://api.lorem.space/image/watch?w=640&h=480&r=1949",
          "https://api.lorem.space/image/watch?w=640&h=480&r=2364",
          "https://api.lorem.space/image/watch?w=640&h=480&r=7899"
      ]
  },
  {
      "id": 3,
      "title": "Handmade Steel Soap",
      "price": 492,
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "category": {
          "id": 3,
          "name": "Furniture",
          "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=2713"
      },
      "images": [
          "https://api.lorem.space/image/furniture?w=640&h=480&r=8201",
          "https://api.lorem.space/image/furniture?w=640&h=480&r=9113",
          "https://api.lorem.space/image/furniture?w=640&h=480&r=1631"
      ]
  },
  {
      "id": 4,
      "title": "Practical Rubber Soap",
      "price": 355,
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "category": {
          "id": 1,
          "name": "Clothes",
          "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=8941"
      },
      "images": [
          "https://api.lorem.space/image/fashion?w=640&h=480&r=8583",
          "https://api.lorem.space/image/fashion?w=640&h=480&r=869",
          "https://api.lorem.space/image/fashion?w=640&h=480&r=336"
      ]
  },
  {
      "id": 5,
      "title": "Sleek Fresh Mouse",
      "price": 733,
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "category": {
          "id": 4,
          "name": "Shoes",
          "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=5906"
      },
      "images": [
          "https://api.lorem.space/image/shoes?w=640&h=480&r=7976",
          "https://api.lorem.space/image/shoes?w=640&h=480&r=6319",
          "https://api.lorem.space/image/shoes?w=640&h=480&r=3204"
      ]
  },
  {
      "id": 6,
      "title": "Practical Cotton Bacon",
      "price": 413,
      "description": "The Football Is Good For Training And Recreational Purposes",
      "category": {
          "id": 4,
          "name": "Shoes",
          "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=5906"
      },
      "images": [
          "https://api.lorem.space/image/shoes?w=640&h=480&r=412",
          "https://api.lorem.space/image/shoes?w=640&h=480&r=2402",
          "https://api.lorem.space/image/shoes?w=640&h=480&r=5363"
      ]
  },
  {
      "id": 7,
      "title": "Gorgeous Granite Gloves",
      "price": 558,
      "description": "The Football Is Good For Training And Recreational Purposes",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=6293",
          "https://api.lorem.space/image?w=640&h=480&r=5488",
          "https://api.lorem.space/image?w=640&h=480&r=2297"
      ]
  },
  {
      "id": 8,
      "title": "Licensed Rubber Sausages",
      "price": 982,
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=207",
          "https://api.lorem.space/image?w=640&h=480&r=8154",
          "https://api.lorem.space/image?w=640&h=480&r=218"
      ]
  },
  {
      "id": 9,
      "title": "Small Frozen Pizza",
      "price": 669,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=4810",
          "https://api.lorem.space/image?w=640&h=480&r=7537",
          "https://api.lorem.space/image?w=640&h=480&r=2697"
      ]
  },
  {
      "id": 10,
      "title": "Small Frozen Computer",
      "price": 851,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "category": {
          "id": 2,
          "name": "Electronics",
          "image": "https://api.lorem.space/image/watch?w=640&h=480&r=9751"
      },
      "images": [
          "https://api.lorem.space/image/watch?w=640&h=480&r=3699",
          "https://api.lorem.space/image/watch?w=640&h=480&r=1424",
          "https://api.lorem.space/image/watch?w=640&h=480&r=3858"
      ]
  },
  {
      "id": 11,
      "title": "Awesome Cotton Cheese",
      "price": 860,
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "category": {
          "id": 2,
          "name": "Electronics",
          "image": "https://api.lorem.space/image/watch?w=640&h=480&r=9751"
      },
      "images": [
          "https://api.lorem.space/image/watch?w=640&h=480&r=3790",
          "https://api.lorem.space/image/watch?w=640&h=480&r=1017",
          "https://api.lorem.space/image/watch?w=640&h=480&r=6601"
      ]
  },
  {
      "id": 12,
      "title": "Intelligent Plastic Chips",
      "price": 845,
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "category": {
          "id": 2,
          "name": "Electronics",
          "image": "https://api.lorem.space/image/watch?w=640&h=480&r=9751"
      },
      "images": [
          "https://api.lorem.space/image/watch?w=640&h=480&r=8281",
          "https://api.lorem.space/image/watch?w=640&h=480&r=7271",
          "https://api.lorem.space/image/watch?w=640&h=480&r=4478"
      ]
  },
  {
      "id": 13,
      "title": "Ergonomic Concrete Hat",
      "price": 961,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=1575",
          "https://api.lorem.space/image?w=640&h=480&r=4426",
          "https://api.lorem.space/image?w=640&h=480&r=2767"
      ]
  },
  {
      "id": 14,
      "title": "Intelligent Steel Shoes",
      "price": 610,
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      "category": {
          "id": 4,
          "name": "Shoes",
          "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=5906"
      },
      "images": [
          "https://api.lorem.space/image/shoes?w=640&h=480&r=8361",
          "https://api.lorem.space/image/shoes?w=640&h=480&r=7887",
          "https://api.lorem.space/image/shoes?w=640&h=480&r=3996"
      ]
  },
  {
      "id": 15,
      "title": "Incredible Soft Cheese",
      "price": 677,
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "category": {
          "id": 3,
          "name": "Furniture",
          "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=2713"
      },
      "images": [
          "https://api.lorem.space/image/furniture?w=640&h=480&r=7379",
          "https://api.lorem.space/image/furniture?w=640&h=480&r=2143",
          "https://api.lorem.space/image/furniture?w=640&h=480&r=9143"
      ]
  },
  {
      "id": 16,
      "title": "Ergonomic Soft Fish",
      "price": 54,
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=3595",
          "https://api.lorem.space/image?w=640&h=480&r=7790",
          "https://api.lorem.space/image?w=640&h=480&r=7310"
      ]
  },
  {
      "id": 17,
      "title": "Small Rubber Keyboard",
      "price": 523,
      "description": "The Football Is Good For Training And Recreational Purposes",
      "category": {
          "id": 1,
          "name": "Clothes",
          "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=8941"
      },
      "images": [
          "https://api.lorem.space/image/fashion?w=640&h=480&r=2847",
          "https://api.lorem.space/image/fashion?w=640&h=480&r=6176",
          "https://api.lorem.space/image/fashion?w=640&h=480&r=6554"
      ]
  },
  {
      "id": 18,
      "title": "Licensed Granite Towels",
      "price": 359,
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=2324",
          "https://api.lorem.space/image?w=640&h=480&r=3942",
          "https://api.lorem.space/image?w=640&h=480&r=6867"
      ]
  },
  {
      "id": 19,
      "title": "Generic Wooden Salad",
      "price": 518,
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "category": {
          "id": 1,
          "name": "Clothes",
          "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=8941"
      },
      "images": [
          "https://api.lorem.space/image/fashion?w=640&h=480&r=6261",
          "https://api.lorem.space/image/fashion?w=640&h=480&r=7913",
          "https://api.lorem.space/image/fashion?w=640&h=480&r=7322"
      ]
  },
  {
      "id": 20,
      "title": "Rustic Granite Ball",
      "price": 52,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "category": {
          "id": 5,
          "name": "Others",
          "image": "https://api.lorem.space/image?w=640&h=480&r=6328"
      },
      "images": [
          "https://api.lorem.space/image?w=640&h=480&r=2806",
          "https://api.lorem.space/image?w=640&h=480&r=4657",
          "https://api.lorem.space/image?w=640&h=480&r=7173"
      ]
  }

]   
    

    const categoryHandler = (category) => {
       console.log('app: ', category)
    }

  return (
    <div className="app">
        <Header />
        <Menu categoryHandler={categoryHandler} />
        <Products data={data} />
        <Footer />     
    </div>
  );
}

export default App;