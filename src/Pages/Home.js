import { useContext, useState, useEffect } from "react";
import UserInfo from '../Components/UserInfo'
import AuthContext from "../context/AuthContext";
import Header from '../Components/Header'

const Home = () => {
  const { user, logoutUser} = useContext(AuthContext);
  let [post, setPost] = useState([])

  useEffect(()=>{
    getPosts()
  },[])
  
  const getPosts = async()=>{
      let response = await fetch('http://127.0.0.1:8000/posts',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
    })
    let data = await response.json()
    if(response.status ===200){
      setPost(data)
      console.log(data)
    }else if(response.statusText ==='Unauthorized'){
      logoutUser()
    }
  }

  

  return (
    <>
    <Header/>
      <section>
        {user && <UserInfo user={user} />}
        <h1>You are on home page!</h1>
        {/* <p>{user.date_of_birth}</p>
        <img src={user.avatar} alt={user.first_name}/> */}
        <h1>{user.firstname} {user.lastname}</h1>
        <ul>
          {post.map( posts =>(
            <div key={posts.id}>
              <p>{posts.body}</p>
              {/* <img src={posts.image} alt={posts.image}/> */}
            </div>
          ))}
        </ul>
        <button onClick={logoutUser}>Logout</button>
      </section>
    </>
  );
};

export default Home;