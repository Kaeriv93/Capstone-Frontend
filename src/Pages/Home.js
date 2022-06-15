import { useContext } from "react";
import {useParams} from 'react-router-dom'
import UserInfo from '../Components/UserInfo'
import AuthContext from "../context/AuthContext";

const Home = () => {
  


  const { user, logoutUser } = useContext(AuthContext);
  console.log(user)
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
      <img src={user.avatar} alt={user.first_name}/>
      <h1>{user.first_name} {user.last_name}</h1>
      <button onClick={logoutUser}>Logout</button>
    </section>
  );
};

export default Home;