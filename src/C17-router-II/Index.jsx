import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from '../C18-router-playground/Comps.module.css'

function Index() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    async function fetchData() {
        const fetchedData = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        setData(fetchedData)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ol className={styles.cardContainer}>
        {data && data.map(post => (
            <li key={post.id} className={styles.card} onClick={() => navigate(`posts/${post.id}`)}>
                <h3>{post.title}</h3>
            </li>
        ))}
        </ol>
    )
}
export default Index