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


   
    const loadedProfile = () =>{
        for(let i = 0; i < thisuser.length; i++){
            let profileUser = null
            if(thisuser[i].id === user.user_id){
                profileUser = thisuser[i]
                return(
                    <div>
                        <h1>{profileUser.firstName} {profileUser.lastName}</h1>
                        <img src ={"http://127.0.0.1:8000" + profileUser.cover} alt={profileUser.firstName}/>
                        <img src ={"http://127.0.0.1:8000" + profileUser.avatar} alt={profileUser.firstName}/>
                        
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
                <div className="UserProfile">
                    {thisuser ? loadedProfile(): <h1>Cannot display</h1>}
                </div>
            </div>
        </>
    )
}

export default Userpage