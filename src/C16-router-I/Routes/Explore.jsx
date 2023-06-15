import { Link } from "react-router-dom"
import styles from '../Components/Header.module.css'

function Explore() {
    
    return (
        <div className={styles.header}>
            <h1>Explorar</h1>
            <Link to='tendencias'>Tendencias</Link>
            <Link to='musica' >Musica</Link>
            <Link to='peliculas'>Peliculas</Link>
        </div>
    )
}
export default Explore