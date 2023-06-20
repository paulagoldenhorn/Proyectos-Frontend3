import { useNavigate } from 'react-router-dom'
import styles from '../Comps.module.css'

function Hotel(props) {
  const {
    id,
    name,
    img,
    daily_price,
    stars,
    city
  } = props.data
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <img src={img} />
      <h3>{name}</h3>
      <p>{city}</p>
      <p>{stars} estrellas</p>
      <p>{daily_price}</p>
      <button onClick={() => navigate(`details/${id}`)}>Ver más</button>
    </div>
  )
}
export default Hotel
