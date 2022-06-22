import { useContext } from 'react';
import DataContext from '../../DataContext';
import styles from './Products.module.css'
import Product from './Product/Product';

const Products = () => {
    const { productsData, category } = useContext(DataContext)

    const categoryProducts = productsData.filter(product => {
       return  product.category.name === category
    })

    return (
            <div className={styles.products}>
                <div className={styles.products__info}>
                    <p className={styles.products__infoCategory}>
                       
                      
                    </p>
                    <p className={styles.products_infoBaner}>
                    PRODUKTÓW W KATEGORII: {categoryProducts.length}
                    </p>
                </div>
                <div className={styles.products__items}> 
                {/* {products.loadingData ? (<p>loading</p>) : (console.log(products.products))} */}
                {categoryProducts.map(product => <Product key={product.id}{...product}/>)}     
                </div>
            </div>
    )
}

export default Products;