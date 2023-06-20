import { Routes, Route, Outlet } from "react-router-dom"
import Post from './Post'
import Index from "./Index"

function Clase17() {
    
    return (
        <>
        <Routes>
            <Route path='/' element={
                <>
                <Outlet />
                </>
            }>
                <Route path="/" element={<Index />}/>
                <Route path='/posts/:id' element={<Post />}/>
            </Route>
        </Routes>
        </>
    )
}
export default Clase17