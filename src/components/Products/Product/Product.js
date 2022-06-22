import styles from './Product.module.css'
import DataContext from '../../../DataContext';
import { useContext } from 'react';




const Product = (props) => {

    const { addToCart } = useContext(DataContext);

    return (
        <div className={styles.product}>
            <img className={styles.product__image} src={props.images[0]} alt=''></img>
            <div className={styles.product__info}>
                <p className={styles.product__infoPrice}>
                    {props.price}$
                </p>
                
                <button onClick={() => {
                    addToCart(props)
                }}>
                    Add to cart
                </button>               
            </div>
        </div>
    )
}

export default Product;