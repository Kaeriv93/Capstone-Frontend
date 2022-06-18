// import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import {ToastContainer} from 'react-toastify'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Styles/Login.css'


const Login = () =>{
    const {loginUser} = useContext(AuthContext)

    return(
        <div className='loginpage'>
            <div className='facenovel'>
                <h1>facenovel</h1>
                <p>Connect with friends and world around you on FaceNovel</p>

            </div>
            <form onSubmit={loginUser}>
                <div className="field">
                    <div className="container">
                        <input className= "input" type ="text" placeholder="Enter Username" name="username" required/>
                        <br/>
                        <br/>
                        <input className= "input" type ="password" placeholder="Enter Password" name="password" required/>
                        <br/>
                        <br/>

                        <input className='button is-info' type="submit" value="Login"/>
                    </div>
                    <br/>
                    <h4>Don't have an account? <Link to='/register'>Sign up</Link></h4>
                </div>
            </form>
            <ToastContainer toastStyle={{backgroundColor:"#0072b1", color:'white'}}/>
        </div>
    )
}

export default Login