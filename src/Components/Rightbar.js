import './Styles/rightbar.css'
import {FaBirthdayCake} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Rightbar = () =>{
  



    const loaded = () =>{
        return(
            <div>
                <Link to={`/home`}>
                <li className='rightBarFriend'>
                    <div className="rightbarImgContainer">
                        <img className="rightbarProfileImg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqm8sWP8zMOCAdImEeAkXfTyzZHnZfR_2aTtZzNTd-5KlabmeW1ml4i2wRiZBXy9EQPI&usqp=CAU' alt='test'/>
                    </div>
                    <span className="rightbarUsername"><span className="rightBarFirstName">First Name</span>Last Name</span>
                </li>
                </Link>
            </div>
        )
    }
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <FaBirthdayCake className='birthdayIcon'/>
                    <br/>
                    <span className="birthdayText"><b>Jesse Broxton</b> and <b>2 other friends</b> have a birthday today!</span>
                </div>
                <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer" ><img className="generalAssembly" src="https://ga-shop-production-herokuapp-com.global.ssl.fastly.net/assets/images/logo_1200_by_627_1QIVL.jpg" alt="ga"/></a>
                <h4 className="rightbarTitle">Friends</h4>
                <ul className="rightbarFriendList">
                  {loaded()}
                </ul>
            </div>
        </div>
    )

}

export default Rightbar