import './share.css'
import { FaPhotoVideo, FaSmile, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { useContext, useState, useEffect } from "react"
import AuthContext from '../../context/AuthContext';

const Share = () =>{
    const[thisuser, setThisUser] = useState(null)
    const {user} = useContext(AuthContext)

    const getProfile = () =>{
        fetch('http://127.0.0.1:8000/profiles/')
        .then(response => response.json())
        .then(result => setThisUser(result))
    }

    useEffect(()=>getProfile(),[])

    
    const userImage = () =>{
        for(let i = 0; i < thisuser.length; i++){
            if(thisuser[i].id === user.user_id){
                let profileUser = null
                profileUser = thisuser[i]
                return(
                    <img src ={"http://127.0.0.1:8000" + profileUser.avatar} alt={profileUser.firstName}/>
                )
            }
        }
    }


    return(
        <div className="share">
            <div className='shareWrapper'>
                <div className='top'>
                    {thisuser ? userImage():<h1>Nothing Here</h1>}
                    <form>
                        <input id="postText" type="text" className='shareInput input' name="content"  placeholder="What's on your mind?" value="What's on your mind?"/>
                        <hr className='shareHr'/>
                        <div className="bottom">
                            <div className='shareOptions'>
                                <div className="shareOption">
                                    <FaPhotoVideo className ="shareIcon photo"/>
                                    <span className='shareOptionText'>Photo or Video</span>
                                </div>
                                <div className="shareOption">
                                    <FaTag className ="shareIcon tagged"/>
                                    <span className='shareOptionText'>Tag</span>
                                </div>
                                <div className="shareOption">
                                    <FaMapMarkerAlt className ="shareIcon marker"/>
                                    <span className='shareOptionText'>Location</span>
                                </div>
                                <div className="shareOption">
                                    <FaSmile className ="shareIcon emoji"/>
                                    <span className='shareOptionText'>Feelings</span>
                                </div>
                            </div>
                            <button type="submit" className='shareButton button is-success'>Share</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Share