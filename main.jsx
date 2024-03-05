import React,{useEffect} from 'react';
import './main.css';
import { LuClipboardCheck } from "react-icons/lu";
// import icons
import { HiOutlineLocationMarker } from "react-icons/hi";

// let me import the images so we dont have this error on the browser.
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import image4 from '../../Assets/image4.png'
import image5 from '../../Assets/image5.png'
import image6 from '../../Assets/image6.png'
import image7 from '../../Assets/image7.png'
import image8 from '../../Assets/image8.png'
import image9 from '../../Assets/image9.png'

import Aos from 'aos';
import 'aos/dist/aos.css';


// let me post the array named data

const Data=[
    {
    id:1,
    imgSrc:image1,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURE RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    }
,

    {
        id:2,
        imgSrc:image2,
        destTitle:'Machu-Pichu',
        location:'Peru',
        grade:'CULTURE RELAX',
        fees: '$600',
        description: 'Huaya-Pichu is a mountain in Peru, rising over Machu Pichu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
        }
,
        {
            id:3,
            imgSrc:image3,
            destTitle:'Great Barrier Reef',
            location:'Australia',
            grade:'CULTURE RELAX',
            fees: '$750',
            description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reaf. The hallmark of this place is "Lavish" and "beauty".Always interested to be in this place'
            }
            ,

            {
                id:4,
                imgSrc:image4,
                destTitle:'Cappadocia',
                location:'Turkey',
                grade:'CULTURE RELAX',
                fees: '$800',
                description: 'According to the World Tourism Ranking, 45 Million people. visit Turkey each year and from that about 2 Million come to visit. Cappadocia. This place is known for its Luxurious satys and adventure, activities.'
                },

                {
                    id:5,
                    imgSrc:image5,
                    destTitle:'Guanajuato',
                    location:'Mexico',
                    grade:'CULTURE RELAX',
                    fees: '$1100',
                    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractive painted with the most bright colors available. Always Welcome.'
                    },

                    {
                id:6,
                imgSrc:image6,
                destTitle:'Cinque Terre',
                location:'Italy',
                grade:'CULTURE RELAX',
                fees: '$840',
                description: 'The vibrant hues of the houses are itbenchmark and explain the beauty of this place. Alsoif you are a foodie and Love seafood, you will bexhilarated with the choice you are about to get hereHappy exploring great food!'
                        }
                        ,

                        {
                            id:7,
                            imgSrc:image7,
                            destTitle:'Angkor Wat',
                            location:'Cambodia',
                            grade:'CULTURE RELAX',
                            fees: '$790',
                            description: 'Angkor Wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its Luxurious stays and adventurous activities'
                            }
                            ,
                            {
                                id:8,
                                imgSrc:image8,
                                destTitle:'Taj Mahal',
                                location:'India',
                                grade:'CULTURE RELAX',
                                fees: '$900',
                                description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the movement is breathtaking beautiful. This place is known for its Luxurious stays and adventurous activities.'
                                }
                                ,

                                {
                                    id:9,
                                    imgSrc:image9,
                                    destTitle:'Bali Island',
                                    location:'Indonesia',
                                    grade:'CULTURE RELAX',
                                    fees: '$500',
                                    description: 'Bali is Indonesia Island and one of the best holiday destinations in the Indonesia archipelago. Bali is known for its vocanic mountains, history, art and culture, food, temples and beautiful sandy beaches.' 
                                    }
                                    ,



]


const Main=()=>{

    // lets create a react hook to add a scroll animation
useEffect(()=>{
    Aos.init({duration: 2000})
},[])

    return(
        <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
            Most Visited Destination
        </h3>
      </div>

      <div className="secContent grid">
{/* here we are goind to use high order array method(map). 
To do that we shall use a list of object in one array. i'm going to create an array named data and from that we shall .map() array to fetch each destination at once. i hope this will make sence to you!  */}

    {
        Data.map(({id,imgSrc,destTitle,location,grade, fees,description})=>{
         return(
            <div data-aos="fade-up" key={id} className="singleDestination">
                {/* here it will return single  id from the map array*/}

            <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
            </div>

            <div className="cardInfo">
                <h4 className="destTitle">
                    {destTitle}
                </h4>
                <span className="continent flex">
                <HiOutlineLocationMarker className="icon"/>
                <span className="name">{location}</span>
                </span>

             <div className="fees flex">
                <div className="grade">
                    <span>{grade}<small>+1</small></span>
                </div>

             <div className="price">
                <h5>{fees}</h5>
             </div>

             </div>

             <div className="desc">
                <p>{description}</p>
             </div>

             <button className="btn flex">
                DETAILS <LuClipboardCheck className='icon '/>
             </button>

            </div>
            </div>
         )
        })
    }

      </div> 

        </section>
    )
}

export default Main;