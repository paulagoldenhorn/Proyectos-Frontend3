import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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
        <>
        {data && data.map(post => (
            <div key={post.id} onClick={() => navigate(`posts/${post.id}`)}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
        </>
    )
}
export default Index