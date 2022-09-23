import React from 'react'
import Card from '../Card/Card'
import { Container } from './styles'
import imageCake from '../../assets/foodiesfeed.com_detail-of-pavlova-strawberry-piece-of-cake.png'
import imagePizza from '../../assets/foodiesfeed.com_neapolitan-pizza-margherita@2x.png'
import imagePeanut from '../../assets/foodiesfeed.com_peanut-butter-and-banana-smoothie@2x.png'

function CardSection() {
  return (
    <Container id='Recipes'>
        <h2>Lastest Recipes</h2>
        <div className='dash'></div>
        <div className='cards'>
          <Card title="Red Velvet Cake" image={imageCake} />
          <Card title="Margherita Pizza" image={imagePizza} />
          <Card title="Peanut Smoothie" image={imagePeanut} />
        </div>
    </Container>
  )
}

export default CardSection