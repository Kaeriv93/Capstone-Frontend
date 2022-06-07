// import { useEffect,useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Login from "./Login"
// import User from '../Pages/User'
// import PrivateRoute from '../utils/PrivateRoute'
import { AuthProvider } from '../context/AuthContext'
import ProtectedPage from '../Pages/User'
// import Test from '../Pages/Test'
import Register from '../Pages/Register'


const Main = ()=>{
    return(
        <AuthProvider>
            <Routes>
                {/* <Route exact path ='/protected' element ={<PrivateRoute/>}>
                    <Route exact path ='/protected' element ={<ProtectedPage/>}/>
                </Route> */}
                <Route path ='/register' element = {<Register/>}/>
                <Route path ='/' element ={<Login/>}/>
                <Route path ='/user' element ={<ProtectedPage/>}/>
                {/* <Route path ='/user' element = {<User/>}/> */}
            </Routes>
        </AuthProvider>
    )
}

export default Main