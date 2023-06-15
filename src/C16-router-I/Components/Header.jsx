import { Link } from "react-router-dom"
import styles from './Header.module.css'


function Header() {
    
    return (
        <div className={styles.header}>
            <p className={styles.title}>Header</p>
            <Link to='/' >Inicio</Link>
            <Link to='/shorts'>Shorts</Link>
            <Link to='/suscripciones' >Suscripciones</Link>
            <Link to='/explorar' >Explorar</Link>
        </div>
    )
}
export default Header