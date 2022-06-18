import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import './Styles/Header.css'
const Header = () =>{
    let {user, logoutUser} = useContext(AuthContext)
    return(
        <div className='header'>
            <nav className='navbar'>
                {user ? (<span><button onClick={logoutUser}>Logout</button>
                <span> | </span>
                <Link to ='/home'>Home</Link>
                <span> | </span>
                <Link to ='/register'>Register</Link>
                
                </span>):null}     
            </nav>
        </div>
    )
}

export default Header