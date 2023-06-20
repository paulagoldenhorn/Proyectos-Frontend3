import { useNavigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import styles from '../Comps.module.css'
import hotels from '../hotels.json'

function Hotel() {
  const params = useParams()
  const navigate = useNavigate()

  const hotelDetail = useMemo(() => {
    return hotels.filter((hotel) => hotel.id == params.id)
  }, [params.id])

  return (
    <>
      <button onClick={() => navigate('..')} style={{backgroundColor: 'green'}}>Volver</button>
      {hotelDetail &&
        hotelDetail.map((hotel) => (
          <div key={hotel.id} className={styles.card}>
            <img src={hotel.img} />
            <h3>{hotel.name}</h3>
            <p>{hotel.daily_price}</p>
            <p>{hotel.stars} estrellas</p>
            <p>{hotel.city}</p>
            <p>{hotel.description}</p>
            <p>{hotel.wifi ? 'Tiene WIFI' : 'No tiene WIFI'}</p>
            <p>{hotel.air_conditioned ? 'Tiene AC' : 'No tiene AC'}</p>
            <p>{hotel.phone}</p>
            <p>{hotel.email}</p>
          </div>
        ))}
    </>
  )
}
export default Hotel
