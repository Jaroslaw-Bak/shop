import styles from './Products.module.css'
import Product from './Product/Product';

const Products = ({data}) => {

    return (
            <div className={styles.products}>
                <p className={styles.products__info}>
                    {data.length} produktów
                </p>
                <div className={styles.sort}>
                    Sortowanko
                </div>
                <div className={styles.products__items}>                                   
                    {data.map(product => <Product key={product.id}{...product}/>)}            
                </div>
            </div>
    )
}

export default Products;