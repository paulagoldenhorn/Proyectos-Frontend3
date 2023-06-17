import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Header</p>
      <Link to='/clase16' className={styles.links}>
        Inicio
      </Link>
      <Link to='shorts' className={styles.links}>
        Shorts
      </Link>
      <Link to='suscripciones' className={styles.links}>
        Suscripciones
      </Link>
      <Link to='explorar' className={styles.links}>
        Explorar
      </Link>
    </div>
  )
}
export default Header
