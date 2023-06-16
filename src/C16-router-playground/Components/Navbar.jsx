import { Link } from 'react-router-dom'
import styles from './Components.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.nav}>BIRRITAS !</h3>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact</Link>   
    </nav>
  )
}
export default Navbar
