import { useEffect,useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Login from "./Login"
// import User from '../Pages/User'
// import PrivateRoute from '../utils/PrivateRoute'
import { AuthProvider } from '../context/AuthContext'
import ProtectedPage from '../Pages/User'
// import Test from '../Pages/Test'
import Register from '../Pages/Register'
import Home from '../Pages/Home'


const Main = ()=>{
    const [user, setUser] = useState(null)

    const URL = "http://127.0.0.1:8000/users/"

    const getUsers = () =>{
        fetch(URL)
        .then(response => response.json())
        .then(result => setUser(result))
    }

    useEffect(()=> getUsers(),[])

    return(
        <AuthProvider>
            <Routes>
                {/* <Route exact path ='/protected' element ={<PrivateRoute/>}>
                    <Route exact path ='/protected' element ={<ProtectedPage/>}/>
                </Route> */}
                <Route path ='/register' element = {<Register/>}/>
                <Route path ='/' element ={<Login/>}/>
                <Route path ='/user' element ={<ProtectedPage/>}/>
                <Route path ='/home' element={<Home thisuser={user}/>}/>
                {/* <Route path ='/user' element = {<User/>}/> */}
            </Routes>
        </AuthProvider>
    )
}

export default Main