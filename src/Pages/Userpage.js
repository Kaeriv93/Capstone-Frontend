import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import Rightbar from "../Components/Rightbar"
import { useContext, useState, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import './Styles/Userpage.css'

const Userpage = () =>{
    const[thisuser, setThisUser] = useState(null)
    const {user} = useContext(AuthContext)

    const getProfile = () =>{
        fetch('http://127.0.0.1:8000/profiles/')
        .then(response => response.json())
        .then(result => setThisUser(result))
    }

    // console.log(user.user_id)
   
    const loadedProfile = () =>{
        for(let i = 0; i < thisuser.length; i++){
            let profileUser = null
            if(thisuser[i].id === user.user_id){
                profileUser = thisuser[i]
                return(
                    <div>
                        <h1>{profileUser.firstName} {profileUser.lastName}</h1>
                    </div>
                )
            }
        }
    }


    useEffect(()=>getProfile(),[])

    return(
        <>
            <Header/>
            <div className="homeContainer">
                <Sidebar/>
                <div className="UserProfile">
                    {thisuser ? loadedProfile(): <h1>Cannot display</h1>}
                </div>
                <Rightbar/>
            </div>
        </>
    )
}

export default Userpage