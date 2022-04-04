import Link from 'next/link';
import styles from '../../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navmain}>
        <li><Link href="/"><a className={styles.navtitle}>SimpleDex</a></Link></li>
        <li><Link href="/about"><a className={styles.navlinks}>About</a></Link></li>
        <li><Link href="/search"><a className={styles.navlinks}>Search</a></Link></li>
        <li><Link href="/teams"><a className={styles.navlinks}>Teams</a></Link></li>
      </ul>
    </nav>
);
}
 
export default Navbar;