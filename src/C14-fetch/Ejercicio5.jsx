import { useEffect, useState } from 'react'

//const api = 'https://jsonplaceholder.typicode.com/posts'
const api = 'test'

function Ejercicio5() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({ title: '', body: '' })

  async function fetchData() {
    try {
      const response = await (
        await fetch(api)
      ).json()
      setPosts(
        response.map((post) => ({
          id: post.id,
          body: post.body,
          title: post.title,
        }))
      )
      setError(null) // prueba
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleOnChange(e) {
    const inputId = parseInt(e.target.id)
    inputId === 1
      ? setValues({ ...values, title: e.target.value })
      : setValues({ ...values, body: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!values) return
    
    setLoading(true)

    const settings = {
        method: 'POST',
        body: JSON.stringify({
            title: values.title,
            body: values.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }

    const response = await (await fetch(api, settings)).json()
    console.log(response)
    setLoading(false)
  }

  return (
    <>
      <form>
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
