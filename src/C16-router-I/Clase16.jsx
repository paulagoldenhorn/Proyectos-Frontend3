import { Routes, Route } from 'react-router-dom'
import Explore from './Routes/Explore'
import Header from './Components/Header'

function Clase16() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='*' element={<div>404 Not Found</div>} />
        <Route path='/' element={<h1>Inicio</h1>} />
        <Route path='/shorts' element={<h1>Shorts</h1>} />
        <Route path='/suscripciones' element={<h1>Suscripciones</h1>} />
        <Route path='/explorar' element={<Explore />} />
            <Route path='/explorar/tendencias' element={<h1>Tendencias</h1>} />
            <Route path='/explorar/musica' element={<h1>Musica</h1>} />
            <Route path='/explorar/peliculas' element={<h1>Peliculas</h1>} />
      </Routes>
    </>
  )
}
export default Clase16
