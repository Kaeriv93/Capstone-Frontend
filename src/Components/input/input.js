import './input.css'
import { FaEllipsisV,FaThumbsUp,FaRegHeart} from "react-icons/fa";
import {useState} from 'react'

const Input = () =>{
    const [isActive, isSetActive] = useState('false')

    const handleToggle = (event,idx) =>{
        console.log(event.target)
        console.log('key index: ', idx)
        isSetActive(!isActive)
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }


   const loaded = () =>{


        return (
            <div>
                 <div className="input-container">
            <div className="inputWrapper">
                <div className="inputTop">
                    <div className='topLeft'>
                        <span className="postUsername">Jonny</span>
                        <span className="postDate">Date</span>
                    </div>
                    <div className="topRight">

                    </div>
                    <button onClick={event => handleToggle()}className='edit-post-button'><FaEllipsisV/></button>
                </div>
                <div className="inputMiddle">
                    <span className='postText'>'Something goes here later'</span>
                    <img className="postImg"src='nothing' alt="pic-published"/>
                    <form  className={isActive ? "hidden-edit" : null}>
                        <input  className='input'value='nothing' name='content' type="text" placeholder='Edit Post!'/>
                        <input  className='input'value='Nothing' name='img' type="text" placeholder='Edit Img!'/>
                        <input className="button is-danger" type ='submit' value='Edit'/>
                    </form>
                </div>
                <div className="inputBottom">
                    <div className='bottomLeft'>
                        <FaThumbsUp className="thumbs likeIcon"/>
                        <FaRegHeart className="heart likeIcon"/>
                        <span className="postLikeCounter">2 people liked it</span>
                    </div>
                    <div className="bottomRight">
                        <span className='postCommentText'>1 comment</span>

                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }

    
    return 0 < 1 ? loaded():<h1>Error Loading Page</h1>
}

export default Input