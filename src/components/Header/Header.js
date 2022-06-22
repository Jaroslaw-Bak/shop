import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'

const Header = (props) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__infoBar}>      
                    
                </div>
                <div className={styles.header__flex}>
                    <div className={styles.header__logo}>
                        <Link to='./' style={{textDecoration: 'none'}}>
                            <p>Logo</p>    
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <Menu categoryHandler={props.categoryHandler}/>
                    </div>
                    <Link to={'/cart'}>                   
                        <div className={styles.basket}>
                            koszyczek
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;
