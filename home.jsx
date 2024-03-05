import React, {useEffect} from 'react';
import './home.css';
import video from '../../Assets/video.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';


const Home=()=>{

// lets create a react hook to add a scroll animation
useEffect(()=>{
    Aos.init({duration: 2000})
},[])

    return(
       <section className='home'>
        <div className="overlay"></div>
        <video src={video} controls autoPlay loop muted  type="video/mp4"></video>

        <div className="homeContent container">
            <div className="textDiv">

               <span data-aos="fade-up" className="smallText">
                Our Packages
                </span> 

                <h1 data-aos="fade-up" className='homeTitle'>
                    Search your Holidays
                </h1>
            </div>

           <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
                <label htmlFor="city">
                    Search Your Destination:
                </label>
                <div className="input flex">
                    <input type="text" placeholder='Enter Name Here....'/>
                    <GrLocation className='icon'/>
                </div>
            </div>

            <div className="DateInput">
                <label htmlFor="date">
                   Select Your Date:
                </label>
                <div className="input flex">
                    <input type="date"/>
                </div>
            </div>

            <div className="priceInput">
               <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">$5000</h3>
               </div>
               
               <div className="input flex">
                <input type="range" max="5000" min="1000" />
               </div>
            </div>

            <div className="searchOptions flex">
            <HiFilter className='icon'/>
            <span>MORE FILTERS</span>
            </div>
            
           </div>

        <div  className="homeFooterIcons flex">
            <div data-aos="fade-up" className="rightIcons">
            <FiFacebook  className='icon'/>
            <FaInstagram className='icon'/>
            <FaTripadvisor  className='icon'/>
            </div>
            <div data-aos="fade-up"  className="leftIcons">
            <FaListUl  className='icon'/>
            <TbApps  className='icon'/>
            </div>
        </div>

        </div>

       </section>
    )
}

export default Home;