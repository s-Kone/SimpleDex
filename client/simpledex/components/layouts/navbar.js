import Link from 'next/link';
import styles from '../../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/"><a className={styles.navtitle}>SimpleDex</a></Link>
      <div className={styles.navmain}>
        <Link href="/about"><a className={styles.navlinks}>About</a></Link>
        <Link href="/search"><a className={styles.navlinks}>Search</a></Link>
        <Link href="/teamlist"><a className={styles.navlinks}>Teams</a></Link>
      </div>
    </div>
  );
}

export default Navbar;