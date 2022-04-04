import styles from "../styles/navbar.module.css"

export const Nav = () => {
    return (
        <nav className={styles.navbar}>
                <ul className={styles.navmain}>
                    <li><a href="/about" className={styles.navtitle}>Home</a></li>
                    <li><a href="/search" className={styles.navlinks}>Search Pokemon</a></li>
                    <li><a href="/teamlist" className={styles.navlinks}>TeamList</a></li>
                    <li><a href="/teambuilder" className={styles.navlinks}>TeamBuilder</a></li>
                    <li><a href="/admin" className={styles.navlinks}>Admin Stats</a></li>
                    <li><a href="/" className={styles.navlinks}>Home</a></li>
                </ul>
        </nav>
    )
}
