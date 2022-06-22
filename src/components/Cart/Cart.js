import DataContext from "../../DataContext";
import { useContext } from "react";
import styles from './Cart.module.css'



const Cart = () => {
    
    const { cartData } = useContext(DataContext)

  return (
    <div className={styles.cart}>
        {console.log(cartData)}
        {cartData.map(product => (
            <div>{product.title}</div>
        ))}
    </div>
  )
}

export default Cart;