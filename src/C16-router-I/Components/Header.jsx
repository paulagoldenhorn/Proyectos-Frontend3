import { Link } from "react-router-dom"
import styles from './Header.module.css'


function Header() {
    
    return (
        <div className={styles.header}>
            <p className={styles.title}>Header</p>
            <Link to='/' className={styles.description}>Inicio</Link>
            <Link to='/shorts'className={styles.description}>Shorts</Link>
            <Link to='/suscripciones' className={styles.description}>Suscripciones</Link>
            <Link to='/explorar' className={styles.description}>Explorarr</Link>
        </div>
    )
}
export default Header