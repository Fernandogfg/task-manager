import { Route, Routes } from "react-router-dom"
import HomePage from "../components/HomePage"
import AddTask from "../components/addTask"
import PageEditar from "../components/pageEditar"

function Router(){
    
   return(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cadastrar" element={<AddTask/>}/>
        <Route path="/editar" element={<PageEditar/>}/>
        <Route path="/editar/:id" element={<PageEditar/>}/>
    </Routes>
    )
}
export default Router