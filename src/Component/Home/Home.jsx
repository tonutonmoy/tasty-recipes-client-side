import React from 'react';



import './Home.css'
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeCard from '../HomeCard/HomeCard';
import { useLoaderData } from 'react-router-dom';
import FoodSafety from '../FoodSafety/FoodSafety';
import Review from '../Review/Review';


const Home = () => {

    const chefData=useLoaderData();

    console.log(chefData)
    return (
        <div className=' home-container'>
           
         <HomeSlider></HomeSlider>


        <section className='container mx-auto'>
            <h2 className='home-title'>All Chef</h2>

            <div className='row row-cols-md-3  '>
             
            {
               chefData && chefData.map(d=>  <HomeCard data={d} key={d.id} ></HomeCard>)
            }


            </div>
           

        </section>


        <section className='container mx-auto'>
            <h2 className='home-title'>FoodSafety</h2>

            <FoodSafety></FoodSafety>
        </section>



          <section className='container mx-auto'>
             
             <h2 className='home-title'>What Customers Are Saying <br /> About Us</h2>
              
              <Review></Review>
          </section>


           
        </div>
    );
};

export default Home;