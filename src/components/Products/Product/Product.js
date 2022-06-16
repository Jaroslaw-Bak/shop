import styles from './Product.module.css'

const Product = (props) => {
    return (
        <div className={styles.product}>
            <img className={styles.product__image} src={props.images[0]}></img>
            <div className={styles.product__info}>
                <p className={styles.product__infoPrice}>
                    {props.price}$
                </p>                
            </div>
        </div>
    )
}

export default Product;