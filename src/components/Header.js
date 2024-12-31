import styles from './home.module.css';


const Header = ()=>{
    return(
        <h1 className={styles.botheader}>
            JOKE <span className={styles.header_span}>BOT.</span>
        </h1>
    )
}

export default Header;