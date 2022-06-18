import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import './Styles/Header.css'
const Header = () =>{
    let {user, logoutUser} = useContext(AuthContext)
    return(
        <div className='header'>
            <nav className='navbar'>
        {user ? <div className="navvv">
                <Link to ='/home'>Home</Link>
                <Link to ='/userpage'>Profile</Link>
                <button id ="log-out" className='button' onClick={logoutUser}>Logout</button>
                
                </div> :null}     
            </nav>
        </div>
    )
}

export default Header