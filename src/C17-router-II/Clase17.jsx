import { Routes, Route, Outlet } from "react-router-dom"
import IndexLogic from './IndexLogic'
import Post from './Ejercicio1/Post'
import PostsIndex from "./Ejercicio1/PostsIndex"
import GamesIndex from "./Ejercicio2/GamesIndex"
import GameDetail from './Ejercicio2/GameDetail'

function Clase17() {
    
    return (
        <>
        <Routes>
            <Route path='*' element={<h4>404 Not Found</h4>}></Route>
            <Route path='/' element={
                <>
                <h1>Clase 17</h1>
                <IndexLogic />
                <Outlet />
                </>
            }>
                <Route path="/ejercicio1" element={<PostsIndex />}/>
                <Route path='/ejercicio1/posts/:id' element={<Post />}/>
                <Route path="/ejercicio2" element={<GamesIndex />}/>
                <Route path='/ejercicio2/games/:id' element={<GameDetail />}/>
            </Route>
        </Routes>
        </>
    )
}
export default Clase17