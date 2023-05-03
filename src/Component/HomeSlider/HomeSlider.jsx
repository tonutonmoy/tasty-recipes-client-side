import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './HomeSlider.css'


import img1 from '../../image/pratiksha-mohanty-V0xp-dTS3z0-unsplash.jpg'
import img7 from '../../image/nordwood-themes-pYWrdKO5ksI-unsplash.jpg'
import img2 from '../../image/ca-creative-bpPTlXWTOvg-unsplash.jpg' 
import img4 from '../../image/pexels-photo-958545.jpeg'
import img3 from '../../image/chef-chilli-chilli-peppers-cooker.jpg'
import img5 from '../../image/pexels-photo-1640772.jpeg'



const HomeSlider = () => {
    return (
       
     <div className='home-slider-container'>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

        <div style={{position:"relative"}}>

        <img className='home-slider-img' src={img1} alt="" />

          <div style={{position:"absolute",bottom:"10%",left:"15%"}}>

           

          <p className='home-slider-text text-center '>A Fine Authentic Cuisine</p>

          <h2 className='home-slider-h2' >Cook Indian now with Testy-Recipes</h2>

          </div>


        </div>


      </SwiperSlide>

      <SwiperSlide>
        <img className='home-slider-img' src={img2} alt="" />
        <div style={{position:"absolute",bottom:"10%",left:"20%"}}>

           

          <p className='home-slider-text text-center '>A Fine Authentic Cuisine</p>
          
          <h2 className='home-slider-h2' >Cook Indian now with Testy-Recipes</h2>
          
          </div>
      </SwiperSlide>

      <SwiperSlide>
        <img className='home-slider-img' src={img3} alt="" />

        <div style={{position:"absolute",bottom:"10%",left:"20%"}}>

           

          <p className='home-slider-text text-center '>A Fine Authentic Cuisine</p>
          
          <h2 className='home-slider-h2' >Cook Indian now with Testy-Recipes</h2>
          
          </div>
      </SwiperSlide>
 

    </Swiper>
     </div>
    );
};

export default HomeSlider;