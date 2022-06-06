import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <>
            <nav className='navbar'>
                <Link to ='/'>Home</Link>
            </nav>
        </>
    )
}

export default Header