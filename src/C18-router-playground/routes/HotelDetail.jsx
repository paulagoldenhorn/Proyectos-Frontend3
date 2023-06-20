import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import styles from '../Comps.module.css'
import hotels from '../hotels.json'

function Hotel() {
  const params = useParams()

  const hotelList = useMemo(() => {
    return hotels.filter((hotel) => hotel.id === params.id)
  }, [params.id])

  console.log(hotelList) // Porque está vacio el arreglo??

  const {
    name,
    img,
    daily_price,
    stars,
    city,
    description,
    wifi,
    air_conditioned,
    phone,
    email,
  } = hotelList

  return (
    <div className={styles.card}>
      <img src={img} />
      <h3>{name}</h3>
      <p>{daily_price}</p>
      <p>{stars} estrellas</p>
      <p>{city}</p>
      <p>{description}</p>
      <p>{wifi ? 'Tiene WIFI' : 'No tiene WIFI'}</p>
      <p>{air_conditioned ? 'Tiene AC' : 'No tiene AC'}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  )
}
export default Hotel
