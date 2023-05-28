import { useState } from 'react'
import { generateId } from './idGenerator'
import Formulario from './Formulario'
import Lista from '../C05-estilos/Lista/Lista'
import Item from '../C05-estilos/Item/Item'

/*
Responsabilidades:
- Formulario muestra el formulario y renderiza los errores
- Clase09 muestra Formulario y renderiza los resultados
*/

function Clase09() {
  const [submittedValues, setSubmittedValues] = useState([])

  function handleSubmit(values) {
    setSubmittedValues([
      ...submittedValues,
      {
        id: generateId(),
        number: values.inputNumber,
        name: values.inputName,
      },
    ])
  }

  return (
    <>
      <h1>¡Nuestros números favoritos!</h1>
      <Formulario onSubmit={handleSubmit} />

      <br />

      <h2>Números favoritos de los usuarios:</h2>
      <Lista>
        {submittedValues.map((value) => {
          return (
            <Item key={value.id}>
              <p>Nombre: {value.name}</p>
              <p style={{ color: 'lightGreen' }}>
                Tu número favorito es: {value.number}
              </p>
            </Item>
          )
        })}
      </Lista>
    </>
  )
}

export default Clase09
