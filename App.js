import React from "react";
import './app.css';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";


const App=()=>{
    return(
    <>
    <Navbar/>
    <Home/>
    <Main/>
   <Footer/>
    </>
    )
}

export default App