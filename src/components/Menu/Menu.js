import styles from './Menu.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

    const [category, setCategory] = useState('Clothes');
    
    useEffect(() => {
        props.categoryHandler(category) 
    },[category])

    return (
        <Link to="/products">
            <ul className={styles.menu}>
                <li className={styles.item} onClick={() => {setCategory('Clothes')}} >Clothes</li>
                <li className={styles.item} onClick={() => {setCategory('Electronics')}}>Electronics</li>
                <li className={styles.item} onClick={() => {setCategory('Furniture')}}>Furniture</li>
                <li className={styles.item} onClick={() => {setCategory('Shoes')}}>Shoes</li>
                <li className={styles.item} onClick={() => {setCategory('Others')}}>Others</li>
            </ul>
        </Link>
    )
}

export default Menu;