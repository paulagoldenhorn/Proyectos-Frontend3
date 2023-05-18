import Card from './Card.jsx'
import './Card.css'
import '../App.css'

function Clase04() {

  return (
    <>
      <Card title="card title">
        card children 1
      </Card>
      <Card footer="card footer">
        card children 2
      </Card>
      <Card title="card title" footer="card footer">
        card children 3
      </Card>
    </>
  )
}

export default Clase04
