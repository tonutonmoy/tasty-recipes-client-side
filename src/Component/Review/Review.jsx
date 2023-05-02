import React from 'react';

import './Review.css'

import rating from '../../image/star_1_.png';

import man1 from '../../image/pexels-man-1516680.jpeg'
import man2 from '../../image/pexels-man-1656684.jpeg'
import man3 from '../../image/pexels-man-2379004.jpeg'
import man4 from '../../image/pexels-man-718261.jpeg'
import man5 from '../../image/pexels-man-9789893.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Review = () => {
    return (
        <div className='review-container'>
              <Swiper
            
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

       <div className='review-card-container '>
        <div >
            <img className='review-img'   src={man1} alt="" />

            <div>
                <h3 className='review-name' >Mr: Raj imrul</h3>
                <p className='review-text'>
                “I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”  Julia L.
                </p>
            </div>


            <div className='d-flex gap-3'>
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            </div>
        </div>


       </div>

      </SwiperSlide>
      <SwiperSlide>

       <div className='review-card-container'>
        <div>
            <img  className='review-img' src={man2} alt="" />

            <div>
                <h3 className='review-name' >Mr: Farjin</h3>
                <p className='review-text'>
                “I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”  Julia L.
                </p>
            </div>


            <div className='d-flex gap-3'>
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            </div>
        </div>


       </div>

      </SwiperSlide>
      <SwiperSlide>

       <div>
        <div className='review-card-container'>
            <img  className='review-img' src={man3} alt="" />

            <div>
                <h3 className='review-name' >Mr:  Shawon</h3>
                <p className='review-text'>
                “I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”  Julia L.
                </p>
            </div>


            <div className='d-flex gap-3'>
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            </div>
        </div>


       </div>

      </SwiperSlide>
      <SwiperSlide>

       <div className='review-card-container'>
        <div>
            <img  className='review-img' src={man4} alt="" />

            <div>
                <h3 className='review-name' >Mr: Jan Bahadur</h3>
                <p className='review-text'>
                “I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”  Julia L.
                </p>
            </div>


            <div className='d-flex gap-3'>
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            </div>
        </div>


       </div>

      </SwiperSlide>
      <SwiperSlide>

       <div className='review-card-container'>
        <div>
            <img  className='review-img' src={man5} alt="" />

            <div>
                <h3 className='review-name' >Mr: polash</h3>
                <p className='review-text'>
                “I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!”  Julia L.
                </p>
            </div>


            <div className='d-flex gap-3'>
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            <img style={{width:'10px',height:"10px"}} src={rating} alt="" />
            </div>
        </div>


       </div>

      </SwiperSlide>
      
    
    </Swiper>
        </div>
    );
};

export default Review;