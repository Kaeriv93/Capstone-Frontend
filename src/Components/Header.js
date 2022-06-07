import {Link} from 'react-router-dom'
const Header = () =>{
 
    return(
        <>
            <nav className='navbar'>
                <Link to ='/'>Home</Link>
                <Link to ='/register'>Register</Link>

            </nav>
        </>
    )
}

export default Header