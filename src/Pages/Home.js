import { useContext, useState, useEffect } from "react";
import UserInfo from '../Components/UserInfo'
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user, logoutUser, authTokens } = useContext(AuthContext);
  let [post, setPost] = useState([])

  useEffect(()=>{
    getPosts()
  },[])
  
  const getPosts = async()=>{
      let response = await fetch('http://127.0.0.1:8000/posts',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    if(response.status ===200){
      setPost(data)
    }else if(response.statusText ==='Unauthorized'){
      logoutUser()
    }
  }
  console.log(user)
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
      {/* <p>{user.date_of_birth}</p>
      <img src={user.avatar} alt={user.first_name}/> */}
      <h1>{user.first_name} {user.last_name}</h1>
      <ul>
        {post.map( posts =>(
          <li key={posts.id}>{posts.body}</li>
        ))}
      </ul>
      <button onClick={logoutUser}>Logout</button>
    </section>
  );
};

export default Home;