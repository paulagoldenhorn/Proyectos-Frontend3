import { useEffect, useState } from 'react'
import styles from '../../C18-router-playground/Comps.module.css'
import games from './games.json'

function GamesIndex() {

    const [gameList, setGameList] = useState([])

    useEffect(() => {
        setGameList(games)
    }, [])
    
    return (
        <>
            <div className={styles.cardContainer}>
                {gameList && gameList.map(game => (
                    <div key={game.id} className={styles.card}>
                        <img style={{height: '150px'}} src={game.imgUrl}/>
                        <h3>{game.name}</h3>
                        <p>Jugado {game.playedTime} veces</p>
                        <p>Puntaje: {game.score}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default GamesIndex