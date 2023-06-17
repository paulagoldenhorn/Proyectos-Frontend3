import { useNavigate } from 'react-router-dom'
import styles from './Components.module.css'

const Card = ({data}) => {

  const navigate = useNavigate()

    return (
      <div className={styles.card}>
          <h3 className={styles.h3}>{data.name}</h3>
          <p className={styles.p}>{data.tagline}</p>
          <img src={data.image_url} alt="beer-detail" />
          <button id={data.id} className={styles.button} onClick={() => navigate(`../beer/${data.id}`)}>Ver</button>
      </div>
    )
  }
  
  export default Card