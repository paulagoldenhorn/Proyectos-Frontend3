import { useEffect, useState } from 'react'
import styles from '../../C18-router-playground/Comps.module.css'
import games from './games.json'
import FilterForm from './FilterForm'
import GameList from './GameList';


function GamesIndex() {
  const [gameList, setGameList] = useState([])
  const [foundedElementsQty, setFoundedElementsQty] = useState('')

  useEffect(() => {
    setGameList(games)
  }, [])

  return (
    <>
      <FilterForm onFoundedElementsQty={foundedElementsQty}/>
      <div className={styles.cardContainer}>
        <GameList data={gameList} onFoundedElements={(qty) => setFoundedElementsQty(qty)} />
      </div>
    </>
  )
}
export default GamesIndex
