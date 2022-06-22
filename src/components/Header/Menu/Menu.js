import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
import DataContext from '../../../DataContext'
import { useContext } from 'react'

const Menu = () => {
    
    const  { changeCategory } = useContext(DataContext);

    return (
        <ul className={styles.menu}>
            <li className={styles.item}>
                <Link to='/Clothes' className={styles.link}>CLOTHES</Link>
            </li>
            <li className={styles.item}>
                <Link to='/Electronics' onClick={() => {changeCategory('Electronics')}} className={styles.link}>ELECTRONICS</Link>
            </li>
            <li className={styles.item} >
                <Link to='/Furniture' onClick={() => {changeCategory('Furniture')}} className={styles.link}>FURNITURE</Link>
            </li>
            <li className={styles.item} >
                <Link to='/Shoes' onClick={() => {changeCategory('Shoes')}} className={styles.link}>SHOES</Link>    
            </li>
            <li className={styles.item} >
                <Link to='/Others' onClick={() => {changeCategory('Others')}} className={styles.link}>OTHERS</Link> 
            </li>
        </ul>
    )
}

export default Menu;