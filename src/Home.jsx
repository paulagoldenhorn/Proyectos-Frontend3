import { Link, Outlet } from "react-router-dom"
import { paths } from "./route_paths"

function Home() {
    
    return (
        <>
            <Link to='/'><h1>Home</h1></Link>
            <Link to={paths.clase2}><button>Clase 2</button></Link>
            <Link to={paths.clase4}><button>Clase 4</button></Link>
            <Link to={paths.clase5}><button>Clase 5</button></Link>
            <Link to={paths.clase6}><button>Clase 6</button></Link>
            <Link to={paths.clase7}><button>Clase 7</button></Link>
            <Link to={paths.clase8}><button>Clase 8</button></Link>
            <Link to={paths.clase9}><button>Clase 9</button></Link>
            <Link to={paths.clase10}><button>Clase 10</button></Link>
            <Link to={paths.clase13}><button>Clase 13</button></Link>
            <Link to={paths.clase14}><button>Clase 14</button></Link>
            <Link to={paths.clase15}><button>Clase 15</button></Link>
            <Outlet />
        </>
    )
}
export default Home