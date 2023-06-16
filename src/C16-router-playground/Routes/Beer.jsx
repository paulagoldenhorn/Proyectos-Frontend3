import { useState, useEffect } from 'react'
import styles from '../Components/Components.module.css'
import { useNavigate, useParams } from 'react-router-dom'

//Esta pagina renderizará cada bebida de manera individual

function Beer() {
  const params = useParams()
  const navigate = useNavigate()

  const [beer, setBeer] = useState([])

  const getBeer = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
    const data = await res.json()
    setBeer(data[0])
  }
  useEffect(() => {
    getBeer()
  })

  return (
    <div>
      <h2>Cerveza numero: {beer.id}</h2>
      <button className={styles.button} onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className={styles.card}>
        <img src={beer.image_url} alt='beer-detail' />
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <p>{beer.brewers_tips} </p>
      </div>
    </div>
  )
}
export default Beer
