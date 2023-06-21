import { useNavigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import styles from '../Comps.module.css'
import hotels from '../hotels.json'

function Hotel() {
  const params = useParams()
  const navigate = useNavigate()

  const hotelDetail = useMemo(() => {
    return hotels.filter((hotel) => hotel.id == params.id)[0]
  }, [params.id])

  return (
    <>
      <button onClick={() => navigate('..')} style={{backgroundColor: 'green'}}>Volver</button>
      {hotelDetail && 
          <div key={hotelDetail.id} className={styles.card}>
            <img src={hotelDetail.img} />
            <h3>{hotelDetail.name}</h3>
            <p>{hotelDetail.daily_price}</p>
            <p>{hotelDetail.stars} estrellas</p>
            <p>{hotelDetail.city}</p>
            <p>{hotelDetail.description}</p>
            <p>{hotelDetail.wifi ? 'Tiene WIFI' : 'No tiene WIFI'}</p>
            <p>{hotelDetail.air_conditioned ? 'Tiene AC' : 'No tiene AC'}</p>
            <p>{hotelDetail.phone}</p>
            <p>{hotelDetail.email}</p>
          </div>
        }
    </>
  )
}
export default Hotel
