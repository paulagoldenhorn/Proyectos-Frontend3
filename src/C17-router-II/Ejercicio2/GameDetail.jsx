import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import games from './games.json'
import styles from '../../C18-router-playground/Comps.module.css'

function GameDetail() {
    const params = useParams()
    const navigate = useNavigate()

    const gameDetail = useMemo(() => {
        return games.filter(game => game.id == params.id)[0]
    })
    return (
        <>
            {gameDetail && (
                <div className={styles.card}>
                <img style={{ height: '150px' }} src={gameDetail.imgUrl} />
                <h3>{gameDetail.name}</h3>
                <p>Jugado {gameDetail.playedTime} veces</p>
                <p>Generos: {gameDetail.tags}</p>
                <p>Puntaje: {gameDetail.score}</p>
              </div>
            )}
            <button onClick={() => navigate('../ejercicio2')} style={{backgroundColor: 'blue'}}>Volver</button>
        </>
    )
}
export default GameDetail