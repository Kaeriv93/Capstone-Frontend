import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"
import Rightbar from "../Components/Rightbar"
import './Styles/Userpage.css'

const Userpage = () =>{
    return(
        <>
            <Header/>
            <div className="homeContainer">
                <Sidebar/>
                <div className="UserProfile">
                    <h1>Yeah stuff should go here</h1>
                </div>
                <Rightbar/>
            </div>
        </>
    )
}

export default Userpage