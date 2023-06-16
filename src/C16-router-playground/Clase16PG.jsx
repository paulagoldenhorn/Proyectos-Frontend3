import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Beer from './Routes/Beer'

function Clase16PG() {
  return (
    <>
      <Routes>
        <Route path='*' element={<h4>404 Not Found</h4>} />
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/beer/:id' element={<Beer />} />
        </Route>
      </Routes>
    </>
  )
}
export default Clase16PG
