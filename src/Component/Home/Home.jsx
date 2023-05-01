import React from 'react';



import './Home.css'
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeCard from '../HomeCard/HomeCard';


const Home = () => {
    return (
        <div className=' home-container'>
           
         <HomeSlider></HomeSlider>


         <HomeCard></HomeCard>



           
        </div>
    );
};

export default Home;