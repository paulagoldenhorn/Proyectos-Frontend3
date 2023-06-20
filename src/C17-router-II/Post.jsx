import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../C18-router-playground/Comps.module.css'

function Post() {
  const params = useParams()
  const navigate = useNavigate()
  const [postDetail, setPostDetail] = useState([])

  async function fetchData() {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    ).json()
    setPostDetail(data)
  }

  useEffect(() => {
    fetchData()
  }, [params.id])

  return (
    <>
      {postDetail && (
        <div className={styles.card}>
          <h3>{postDetail.title}</h3>
          <p>{postDetail.body}</p>
          <button onClick={() => navigate('..')}>Volver</button>
        </div>
      )}
    </>
  )
}
export default Post
