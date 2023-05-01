import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './HomeSlider.css'

import img1 from '../../image/pexels-photo-1099680.jpeg'
import img2 from '../../image/pexels-photo-1640772.jpeg'
import img3 from '../../image/pexels-photo-958545.jpeg'


const HomeSlider = () => {
    return (
       
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

        <div style={{position:"relative"}}>

        <img className='home-slider-img' src={img1} alt="" />

          <div style={{position:"absolute",bottom:"10%",left:"30%"}}>

           

          <h3 className='text-center home-slider-h3'>A Fine Authentic Cuisine</h3>

          <h2 className='home-slider-h2' >Enjoy your food experience</h2>

          </div>


        </div>


      </SwiperSlide>
      <SwiperSlide>
        <img className='home-slider-img' src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='home-slider-img' src={img3} alt="" />
      </SwiperSlide>
 

    </Swiper>
    );
};

export default HomeSlider;