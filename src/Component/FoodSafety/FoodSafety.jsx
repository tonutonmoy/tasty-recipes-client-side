import React from 'react';
import './FoodSafety.css';
import footSafetyImg from '../../image/foodSafetyImage.4e305fb2.jpg'


const FoodSafety = () => {
    return (
        <div className='row row-cols-md-2    food-safety-container'>
            

            <div  >
                <img className='w-100 food-safety-img' src={footSafetyImg} alt="" />
            </div>

            <div className='my-5 ps-md-5'>
                <h3 className='food-safety-title'>All shefs are food safety certified</h3>
                <p className='food-safety-text my-5'>At Shef, we are committed to ensuring that food is prepared safely. Shefs are certified through an accredited food safety exam and are required to comply with all local laws and regulations.we are committed to ensuring that food is prepared safely. Shefs are certified through an accredited food safety exam and are required to comply with all local laws and regulations.we are committed to ensuring that food is prepared safely. Shefs are certified through an accredited food safety exam and are required to comply with all local laws and regulations.

                 </p>
                 <p style={{fontWeight:"700"}} className='food-safety-text'>Learn more...</p>
            </div>
        </div>
    );
};

export default FoodSafety;