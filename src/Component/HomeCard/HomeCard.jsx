import React from 'react';
import './HomeCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const HomeCard = ({data}) => {



  const {id, img, name, experience, like, recipes} =data;

  const navigate =useNavigate();

  const viewRecipesButton=()=>{

    

    navigate(`/recipesData/${id}`)

  }


    return (

      <div className='my-5'>

     
        
              <Card className='home-card-container ' style={{ width: '20rem' }}>
      <Card.Img className='home-card-img' variant="top" src={img} />
      <Card.Body>
        <Card.Title className='home-card-title'>Name: {name} </Card.Title>
        
        <Card.Text className='home-card-text'>
         Recipes: {recipes}
        </Card.Text>
        <Card.Text className='home-card-text'>
          Experience: {experience}
        </Card.Text>
        <Card.Text className='home-card-text'>
         Likes: {like}
        </Card.Text>
        <Button onClick={viewRecipesButton} className='home-card-button' variant="primary">View Recipes</Button>
      </Card.Body>
    </Card>

    </div>
      
    );
};

export default HomeCard;