import React from 'react';
import Container from './styles';

function Card({title, image}) {
  return (
    <Container>
        <figure>
            <img src={image} alt={title} />
        </figure>
        <div className='content'>
            <div className='little-dash'></div>
            <h3>{title}</h3>
        </div>
    </Container>
  )
}

export default Card;