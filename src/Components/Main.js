// import { useEffect,useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Login from "./Login"
import User from '../Pages/User'


const Main = ()=>{
    return(
        <Routes>
            <Route path ='/' element ={<Login/>}/>
            <Route path ='/user' element = {<User/>}/>
        </Routes>
    )
}

export default Main