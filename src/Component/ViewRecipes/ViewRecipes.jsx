import React, { Suspense, lazy } from 'react';
import './ViewRecipes.css'
import { useLoaderData } from 'react-router-dom';
import ViewRecipesBanner from '../ViewRecipesBanner/ViewRecipesBanner';
import Loader from '../Loader/Loader';
import RecipesCard from '../RecipesCard/RecipesCard';




const ViewRecipes = () => {

    const singleData= useLoaderData();

    
    return (
        <div>
            
          <ViewRecipesBanner data={singleData}></ViewRecipesBanner>


          <section className='container mx-auto ' style={{marginBottom:"200px"}}>
            <h2 className='home-title'>All Recipes</h2>
           
           <div className=' row row-cols-2 my-5 ' >

           
            
           {
               singleData?.recipes.map((a,index)=>  <RecipesCard key={index} data={a}> </RecipesCard> 
               
               )   
             }

           

           </div>

          </section>

        </div>
    );
};



export default ViewRecipes;