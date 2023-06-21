import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useEffect, useMemo } from 'react'

import styles from '../../C18-router-playground/Comps.module.css'
import GameRender from './GameRender'

function GameList(props) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const filteredGameList = useMemo(() => {
    const genre = searchParams.get('genre')
    const minPlayedTime = parseInt(searchParams.get('minPlayedTime'))
    return props.data.filter(
      (game) => game.playedTime >= minPlayedTime && game.tags.includes(genre)
    )
  }, [searchParams])

  useEffect(() => {
    props.onFoundedElements(filteredGameList.length)
  }, [filteredGameList])

  return (
    <>
      {searchParams.has('genre') && searchParams.has('minPlayedTime') ? (
        filteredGameList.length != 0 ? (
          filteredGameList.map((game) => (
            <div key={game.id} className={styles.card}>
              <GameRender game={game} />
              <button onClick={() => navigate(`games/${game.id}`)}>
                Ver más
              </button>
            </div>
          ))
        ) : (
          <>
            <h4>
              No se encontraron elementos que coincidan con esos parametros
            </h4>
          </>
        )
      ) : (
        props.data.map((game) => (
          <div key={game.id} className={styles.card}>
            <GameRender game={game} />
            <button onClick={() => navigate(`games/${game.id}`)}>
              Ver más
            </button>
          </div>
        ))
      )}
    </>
  )
}
export default GameList
