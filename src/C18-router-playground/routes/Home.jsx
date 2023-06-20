import { useEffect, useState } from 'react'
import hotels from '../hotels.json'
import Hotel from '../components/Hotel'

function Home() {
    
    const [hotelList, setHotelList] = useState([])

    useEffect(() => {
        setHotelList(hotels)
    }, [])


    return (
        <>
        <h1>home</h1>
        {hotelList && hotelList.map(hotel => (
            <Hotel key={hotel.id} data={hotel} />
        ))}
        </>
    )
}
export default Home