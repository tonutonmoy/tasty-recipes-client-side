import React from 'react';
import './ViewRecipesBanner.css'

const ViewRecipesBanner = ({data}) => {

    const {name,experience,bio,img,recipes_number,like}=data;
    return (
        <div className='row row-cols-2 ViewRecipesBanner-container container mx-auto'>

            <div>

                <img className='view-recipes-banner-img' src={img} alt="" />

            </div>


            <div className='p-5'>

                <h3  className='view-recipes-banner-title'>

                     Name: {name}

               </h3>


                <p className='view-recipes-banner-text'>

                   <span  className='view-recipes-banner-span  '>Bio:</span> {bio}

                </p>


                <p className='view-recipes-banner-text'>

                    <span className='view-recipes-banner-span'>Recipes: </span>{recipes_number}

                </p>


                <p className='view-recipes-banner-text'>

                    <span className='view-recipes-banner-span'>Experience:</span> {experience} 

                </p>


                <p className='view-recipes-banner-text'>

                   <span className='view-recipes-banner-span'> Likes:</span> {like}

                </p>

            </div>

        </div>
    );
};

export default ViewRecipesBanner;