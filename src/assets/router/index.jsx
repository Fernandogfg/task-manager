import { Route, Routes } from "react-router-dom"
import HomePage from "../components/HomePage"
import AddTask from "../components/addTask"

function Router(){
    
   return(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cadastrar" element={<AddTask/>}/>
        <Route path="/editar/:id" element={<AddTask/>}/>
    </Routes>
    )
}
export default Router