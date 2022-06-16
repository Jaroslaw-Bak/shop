import styles from './Menu.module.css'
import { useState } from 'react'

const Menu = (props) => {

    const [category, setCategory] = useState('zadna');
    
    props.categoryHandler(category) 
    


    return (
        <ul className={styles.menu}>
            <li className={styles.item} onClick={() => {setCategory('clothes')}} >Clothes</li>
            <li className={styles.item} onClick={() => {setCategory('electronics')}}>Electronics</li>
            <li className={styles.item} >Furniture</li>
            <li className={styles.item} >Shoes</li>
            <li className={styles.item} >Others</li>
        </ul>
    )
}

export default Menu;