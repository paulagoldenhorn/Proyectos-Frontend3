import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import styles from '../../C18-router-playground/Comps.module.css'

function GameList(props) {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

  const filteredGameList = useMemo(() => {
    const genre = searchParams.get('genre')
    const minPlayedTime = parseInt(searchParams.get('minPlayedTime'))
    // const equalGenre = props.data.filter(game => game.tags.filter(tag => {
    //     tag == genre
    // }))
    return props.data.filter((game) => game.playedTime >= minPlayedTime && game.tags.includes(genre) )
    }, [searchParams])

    useEffect(() => {
        props.onFoundedElements(filteredGameList.length)
    }, [filteredGameList])

  
  return (
    <>
        {
            searchParams.has('genre') && searchParams.has('minPlayedTime')
            ? filteredGameList.map((game) => (
                <div key={game.id} className={styles.card}>
                  <img style={{ height: '150px' }} src={game.imgUrl} />
                  <h3>{game.name}</h3>
                  <p>Jugado {game.playedTime} veces</p>
                  <p>Generos: {game.tags}</p>
                  <p>Puntaje: {game.score}</p>
                  <button onClick={() => navigate(`games/${game.id}`)}>Ver más</button>
                </div>
              ))
            : props.data.map((game) => (
                <div key={game.id} className={styles.card}>
                  <img style={{ height: '150px' }} src={game.imgUrl} />
                  <h3>{game.name}</h3>
                  <p>Jugado {game.playedTime} veces</p>
                  <p>Generos: {game.tags}</p>
                  <p>Puntaje: {game.score}</p>
                  <button onClick={() => navigate(`games/${game.id}`)}>Ver más</button>
                </div>
              ))
        }
    </>
  )
}
export default GameList
