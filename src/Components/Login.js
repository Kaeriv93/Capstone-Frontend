import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () =>{
    const navigate = useNavigate()
    const [user,setUser] = useState(null)
    const [newForm, setNewForm] = useState({

    })



//   const URL = 'http://127.0.0.1:8000/users/'
//     useEffect(()=>{
//         const getUser = async() =>{
//         const response = await fetch(URL)
//         const data = await response.json()
//         setUser(data)
//         console.log(data)
//   }
//   getUser()
// },[])


    // const handleChange = (e)=>{
    //     setNewForm({...newForm, [e.target.name]:e.target.value})
    // }

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     try{
    //         const(data) = await axios.po

    //     }catch(err){
    //         console.log(err)
    //     }
    //     setNewForm({
    //         email:'',
    //         passwords:''
    //     })
    // }


    return(
        <div className='login'>
            <form >
                <div className="login-container">
                    <div className="container">
                        <label><b>Email</b></label>
                        <input type ="text" placeholder="Enter Email" name="email" required/>

                        <label><b>Password</b></label>
                        <input type ="password" placeholder="Enter Password" name="password" required/>

                        <input type="submit" value="Login"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login