import { createContext, useState } from "react";
import data from './data';

const DataContext = createContext();

export function DataProvider({ children }) {

    const [productsData, setProductsData] = useState(data)
    const [cartData, setCartData] = useState([])
    const [category, setCategory] = useState('Clothes')


    const changeCategory = (cat) => {
        setCategory(cat)
    }

    const  addToCart = (product) => {
        setCartData(prevState => [...prevState, product ]); 
    }

    return (
        <DataContext.Provider value = {{ productsData, category, changeCategory, addToCart, cartData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;