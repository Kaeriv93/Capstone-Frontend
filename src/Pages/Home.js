// import {useState, useEffect } from "react";
import Header from '../Components/Header'
import Posts from "../Components/Posts";
import Sidebar from "../Components/Sidebar";
import Rightbar from "../Components/Rightbar";
import './Styles/Home.css'

const Home = () => {

  

  return (
    <>
    <Header/>
     <div className ="homeContainer">
        <Sidebar/>
        <Posts/>
        <Rightbar/>
     </div>
    </>
  );
};

export default Home;