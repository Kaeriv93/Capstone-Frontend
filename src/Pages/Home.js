import { useContext } from "react";
import {useParams} from 'react-router-dom'
import UserInfo from '../Components/UserInfo'
import AuthContext from "../context/AuthContext";

const Home = (props) => {
  let{username} = useParams()
  let thisusers = props.thisuser
  let thisuser = thisusers.find(u => u._username === username)

  const { user, logoutUser } = useContext(AuthContext);
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>You are on home page!</h1>
      <h1>{thisuser.first_name} {thisuser.last_name}</h1>
      <button onClick={logoutUser}>Logout</button>
    </section>
  );
};

export default Home;