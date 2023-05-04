import React, { Suspense, lazy } from 'react';



import './Home.css'
import HomeSlider from '../HomeSlider/HomeSlider';
// import HomeCard from '../HomeCard/HomeCard';
import { useLoaderData } from 'react-router-dom';
import FoodSafety from '../FoodSafety/FoodSafety';
import Review from '../Review/Review';
import Loader from '../Loader/Loader';


const HomeCard =lazy(()=> delay( import('../HomeCard/HomeCard')))


const Home = () => {

    const chefData=useLoaderData();

    
    
    return (
        <div className=' home-container'>
           
           

           <HomeSlider></HomeSlider>
           

           
           
        
         

        <section className='container mx-auto'>
            <h2 className='home-title'>Top Indian Chef</h2>

            <div className='row row-cols-md-3  '>

            
             
            {
               chefData && chefData.map(d=> <Suspense key={d.id}  fallback={<Loader ></Loader>}> 

                  <HomeCard data={d} ></HomeCard> 
                    
                </Suspense>   )
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



function delay(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
    }).then(() => promise);
  }


export default Home;