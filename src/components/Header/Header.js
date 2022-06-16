import styles from './Header.module.css'
import logo from '../../assets/shop_logo.png'
import basket from '../../assets/basket.png'
import profile from '../../assets/profile_logo.png'
import Searchbar from '../Searchbar/Searchbar'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.left}>
                    <img src={logo} className={styles.logo}></img>     
                </div>
                <div className={styles.right}>
                    <div className={styles.search}>
                        <Searchbar />
                    </div>
                    <img className={styles.profile} src={profile} alt='profile_logo' />
                    <img className={styles.basket} src={basket}  alt='basket'/>
                </div>
            </div>
        </>
    )
}

export default Header;
