import './App.css';
import {useEffect,useState} from 'react'
// import {Routes, Route} from 'react-router-dom'


function App() {
  const [user,setUser] = useState(null)

  const URL = 'http://localhost:4000/users'

useEffect(()=>{
  const getUser = async() =>{
    const response = await fetch(URL)
    const data = await response.json()
    setUser(data)
    console.log(data)
  }
  getUser()
},[])

const loaded = () =>{
  return user.map((person, idx)=>(
    <div key ={idx}>
      <h1>{person.firstName} {person.lastName}</h1>
      <h2>{person.username}</h2>
      <img src ={person.avatar} alt={person.firstName}/>
      <p>{person.description}</p>
      <p>{person.blog[idx]}</p>
  
    </div>
  ))
}

  return user ? loaded(): <h1>Yah this doesn't work</h1>
}

export default App;
