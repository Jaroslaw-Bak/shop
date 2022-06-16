import styles from './Searchbar.module.css'

const Searchbar = () => {
    return (
        <>
            <input className= {styles.input} type='text' placeholder='Szukaj'></input>
            <button className={styles.button}>szukaj</button>
        </>
    )
}

export default Searchbar;