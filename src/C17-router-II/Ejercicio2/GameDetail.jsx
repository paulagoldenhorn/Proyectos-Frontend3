import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import games from './games.json'
import styles from '../../C18-router-playground/Comps.module.css'
import GameRender from './GameRender'

function GameDetail() {
  const params = useParams()
  const navigate = useNavigate()

  const gameDetail = useMemo(() => {
    return games.find((game) => game.id == params.id)
  }, [])

  return (
    <>
      {gameDetail && (
        <div className={styles.card}>
          <GameRender game={gameDetail} />
        </div>
      )}
      <button
        onClick={() => navigate('../ejercicio2')}
        style={{ backgroundColor: 'blue' }}
      >
        Volver
      </button>
    </>
  )
}
export default GameDetail
