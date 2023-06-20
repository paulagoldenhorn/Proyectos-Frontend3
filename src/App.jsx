import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import { paths } from './route_paths'
import Clase02 from './C02-JSX/Clase02.jsx'
import Clase04 from './C04-components/Clase04.jsx'
import Clase05 from './C05-estilos/Clase05.jsx'
import Clase06 from './C06-keys/Clase06'
import Clase07 from './C07-state-I/Clase07'
import Clase08 from './C08-state-II/Clase08'
import Clase09 from './C09-forms/Clase09'
import Clase10 from './C10-repaso/Clase10'
import Clase13 from './C13-useEffect/Clase13'
import Clase14 from './C14-fetch/Clase14'
import Clase15 from './C15-memo/Clase15'
import Clase16 from './C16-router-I/Clase16'
import Clase16PG from './C16-router-playground/Clase16PG'
import Clase18PG from './C18-router-playground/Clase18PG'
import Clase17 from './C17-router-II/Clase17'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path={paths.notFound} element={<div>404 Not Found</div>} />
          <Route path={paths.clase2} element={<Clase02 />} />
          <Route path={paths.clase4} element={<Clase04 />} />
          <Route path={paths.clase5} element={<Clase05 />} />
          <Route path={paths.clase6} element={<Clase06 />} />
          <Route path={paths.clase7} element={<Clase07 />} />
          <Route path={paths.clase8} element={<Clase08 />} />
          <Route path={paths.clase9} element={<Clase09 />} />
          <Route path={paths.clase10} element={<Clase10 />} />
          <Route path={paths.clase13} element={<Clase13 />} />
          <Route path={paths.clase14} element={<Clase14 />} />
          <Route path={paths.clase15} element={<Clase15 />} />
          <Route path={paths.clase16} element={<Clase16 />} />
          <Route path={paths.clase16PG} element={<Clase16PG />} />
          <Route path='/clase17/*' element={<Clase17 />} />          
          <Route path='/clase18PG/*' element={<Clase18PG />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
