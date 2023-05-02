import React from 'react';
import './ViewRecipes.css'
import { useLoaderData } from 'react-router-dom';
import ViewRecipesBanner from '../ViewRecipesBanner/ViewRecipesBanner';
import RecipesCard from '../RecipesCard/RecipesCard';

const ViewRecipes = () => {

    const singleData= useLoaderData();

    console.log(singleData)
    return (
        <div>
            
          <ViewRecipesBanner data={singleData}></ViewRecipesBanner>


          <section>
            <h2>All Recipes</h2>
           
             {
               singleData?.recipes.map((a,index)=> <RecipesCard key={index} data={a}></RecipesCard>)   
             }


          </section>

        </div>
    );
};

export default ViewRecipes;