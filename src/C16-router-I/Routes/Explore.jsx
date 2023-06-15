import { Link } from "react-router-dom"

function Explore() {
    
    return (
        <>
            <h1>Explore</h1>
            <Link to='/' >Inicio</Link>
            <Link to='/explore/tendencias'>Tendencias</Link>
            <Link to='/explore/musica' >Musica</Link>
            <Link to='/explore/peliculas'>Peliculas</Link>
        </>
    )
}
export default Explore