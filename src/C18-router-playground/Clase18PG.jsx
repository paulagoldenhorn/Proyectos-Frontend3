import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './routes/Home'
import HotelDetail from './routes/HotelDetail'

function Clase18PG() {
  return (
    <>
      <Routes>
        <Route path='*' element={<h4>404 Not Foundd</h4>} />
        <Route
          path='/'
          element={
            <>
            <h1>Hoteles</h1>
              <Outlet />
            </>
          }
        >
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<HotelDetail />} />
        </Route>
      </Routes>
    </>
  )
}
export default Clase18PG
