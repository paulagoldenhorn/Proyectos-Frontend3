import { useEffect, useState } from 'react'
import styles from '../Components/Components.module.css'
import Card from "../Components/Card"

function Home() {
  const [beers, setBeers] = useState([])

  const getBeers = async () => {
    const data = await (await fetch('https://api.punkapi.com/v2/beers')).json()
    setBeers(data)
  }

  useEffect(() => {
    getBeers()
  })

  return (
    <div className={styles.grid}>
      {beers.length ? beers.map((beer) => <Card key={beer.id} data={beer} />) : null}
    </div>
  )
}
export default Home
