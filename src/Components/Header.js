import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
const Header = () =>{
    let {user, logoutUser} = useContext(AuthContext)
    return(
        <>
            <nav className='navbar'>
                {user ? (<button onClick={logoutUser}>Logout</button>):<Link to ='/'>Login</Link>}
                <span> | </span>
                <Link to ='/home'>Home</Link>
                <span> | </span>
                <Link to ='/register'>Register</Link>

               
                
            </nav>
        </>
    )
}

export default Header