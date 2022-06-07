import {useNavigate, Outlet} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({ children, ...rest }) =>{
    const navigate = useNavigate()
    let { user } = useContext(AuthContext)
    return user ? <Outlet /> : navigate('/')
}

export default PrivateRoute