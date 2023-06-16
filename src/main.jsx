import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
//import App from './App'
//import Clase16 from './C16-router-I/Clase16'
import Clase16PG from './C16-router-playground/Clase16PG'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Clase16PG />
  </BrowserRouter>
  

  // <React.StrictMode>
  // </React.StrictMode>,
)
