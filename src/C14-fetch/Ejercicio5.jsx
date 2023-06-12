import { useEffect, useState } from 'react'

const api = 'https://jsonplaceholder.typicode.com/posts'

function Ejercicio5() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({ title: '', body: '' })

  async function fetchData() {
    try {
      // GET posts y guardar los datos relevantes en un estado
      const getResponse = await (await fetch(api)).json()
      setPosts(
        getResponse.map((post) => ({
          id: post.id,
          body: post.body,
          title: post.title,
        }))
      )
    } catch (error) {
      setError(error)
    }
  }
  // GET datos en el primer render de App
  useEffect(() => {
    fetchData()
  }, [])

  function handleOnChange(e) {
    // Setear estado de valores con lo ingresado en los inputs
    const inputId = parseInt(e.target.id)
    inputId === 1
      ? setValues({ ...values, title: e.target.value })
      : setValues({ ...values, body: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // Si no se inputearon datos corto la ejecución
    if (values.title === '' || values.body === '') return
    // Activo loading para que usuario sepa que está pasando
    setLoading(true)
    // Objeto con la config para hacer POST en api
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        title: values.title,
        body: values.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    try {
      // POST de los datos a la api
      const postResponse = await (await fetch(api, settings)).json()
      console.table(postResponse)
      // GET de los datos para 'actualizar la vista' (test)
      fetchData()
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return (
    <>
      <p style={{ fontStyle: 'italic' }}>
        No se renderiza tu post porque en realidad no se guarda en el backend
      </p>
      <form>
        <fieldset>
          <legend>Ingresa tu post y miralo en la consola</legend>
          <input
            id='1'
            type='text'
            placeholder='Titulo'
            onChange={handleOnChange}
          />
          <input
            id='2'
            type='text'
            placeholder='Cuerpo'
            onChange={handleOnChange}
          />
          <button onClick={handleSubmit}>Guardar</button>
        </fieldset>
      </form>

      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      {loading && <p style={{ color: 'yellow' }}>Cargando...</p>}

      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : undefined}
    </>
  )
}
export default Ejercicio5
