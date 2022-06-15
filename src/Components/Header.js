import {Link} from 'react-router-dom'
const Header = () =>{
 
    return(
        <>
            <nav className='navbar'>
                <Link to ='/'>Login</Link>
                <span> | </span>
                <Link to ='/home'>Home</Link>
                <span> | </span>
                <Link to ='/register'>Register</Link>

            </nav>
        </>
    )
}

export default Header