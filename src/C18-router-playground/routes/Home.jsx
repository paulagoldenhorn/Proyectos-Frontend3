import { useEffect, useState } from 'react'
import styles from '../Comps.module.css'
import hotels from '../hotels.json'
import Hotel from '../components/Hotel'

function Home() {
  const [hotelList, setHotelList] = useState([])

  useEffect(() => {
    setHotelList(hotels)
  }, [])

  return (
    <>
      <div className={styles.cardContainer}>
        {hotelList &&
          hotelList.map((hotel) => <Hotel key={hotel.id} data={hotel} />)}
      </div>
    </>
  )
}
export default Home
