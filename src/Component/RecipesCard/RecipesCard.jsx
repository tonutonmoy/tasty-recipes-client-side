import React from 'react';
import './RecipesCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const RecipesCard = ({data}) => {

    const {recipes_name,ingredients,cooking_method} = data;
    return (
        <div>
                 <Card className='home-card-container' style={{ width: '20rem' }}>
      
      <Card.Body>
        <Card.Title className='home-card-title'>Name: {recipes_name} </Card.Title>
        
        <Card.Text className='home-card-text'>
        Ingredients: {
            ingredients && ingredients.map((a,index)=> <li key={index}>  {a}</li>)
        }
        </Card.Text>
        <Card.Text className='home-card-text'>
         Cooking method: {cooking_method} 
        </Card.Text>
        <Card.Text className='home-card-text'>
         Likes: 
        </Card.Text>
        <Button  className='home-card-button' variant="primary">View Recipes</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default RecipesCard;