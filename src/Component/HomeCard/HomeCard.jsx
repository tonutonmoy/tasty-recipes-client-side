import React from 'react';
import './HomeCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeCard = () => {
    return (
        <div>
              <Card className='home-card-container' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className='home-card-title'>Name: </Card.Title>
        
        <Card.Text className='home-card-text'>
         Recipes:
        </Card.Text>
        <Card.Text className='home-card-text'>
          Experience:
        </Card.Text>
        <Card.Text className='home-card-text'>
         likes:
        </Card.Text>
        <Button className='home-card-button' variant="primary">View Recipes</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default HomeCard;