import React from 'react'
import { useState } from 'react'

const api = 'https://cat-fact.herokuapp.com/facts'

function Ejercicio2() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true)
    const facts = await (await fetch(api)).json()
    setData(
      facts.map((fact) => ({
        id: fact._id,
        text: fact.text,
      }))
    )
    setLoading(false)
  }

  return (
    <>
      {data.length == 0 && <button onClick={fetchData}>Buscar datos</button>}
      {loading && <p style={{ color: 'yellow' }}>Cargando...</p>}
      <ul>
          {data.map((element) => {
            return (
              <React.Fragment key={element.id}>
                <li>{element.text}</li>
              </React.Fragment>
            )
          })}
        </ul>
    </>
  )
}
export default Ejercicio2
