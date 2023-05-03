import React, { useState } from 'react';
import './RecipesCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineFavorite } from 'react-icons/md';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RecipesCard = ({data}) => {

   

    const {recipes_name,ingredients,cooking_method,rating} = data;


  

    const disableButton=(event)=>{
         
        toast( 'Favorite Done') 

          event.target.disabled='true'
     
        

    }

    return (
        <div className='my-5'>
                 <Card className='home-card-container p-3' style={{ width: '100%' }}>
      
      <Card.Body>

        <Card.Title className='home-card-title'>

           <span style={{fontSize:"30px"}}>Name:</span>  {recipes_name} 

        </Card.Title>
        
        <Card.Text className='home-card-text my-5 '>

        <span style={{fontWeight:"500"}}>Ingredients: </span> {
            ingredients && ingredients.map((a,index)=> <li key={index}>  {a}</li>)
        }

        </Card.Text>


        <Card.Text className='home-card-text my-5 '>

        <span style={{fontWeight:"500"}}> Cooking method: </span>  

        {cooking_method.slice(0,500)} SeeMore... 

        </Card.Text>

        <div className='home-card-text my-5'>

         <Rating style={{ maxWidth: 250 }} value={ rating}  readonly />

         <ToastContainer></ToastContainer>

        </div>

        <Button onClick={(e)=> disableButton(e)}   className='home-card-button' variant="primary" >Favorite <MdOutlineFavorite/> </Button>

      </Card.Body>
    </Card>
        </div>
    );
};

export default RecipesCard;