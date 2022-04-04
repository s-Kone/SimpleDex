import styles from "../styles/navbar.module.css"

const Nav = () => {
    return (
        <nav className={styles.navbar}>
                <ul className={styles.navmain}>
                    <li><a href="/about" className={styles.navtitle}>SimpleDex</a></li>
                    <li><a href="/search" className={styles.navlinks}>Search</a></li>
                    <li><a href="/teams" className={styles.navlinks}>Teams</a></li>
                </ul>
        </nav>
        )
    }
    
export default Nav;
