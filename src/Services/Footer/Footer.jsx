import React from 'react';
import { Container } from './styles';
import instagram from '../../assets/InstagramEllipse.svg';
import twitter from '../../assets/TwitterEllipse.svg';
import facebook from '../../assets/FacebookEllipse.svg';
import Pinterest from '../../assets/PinterestEllipse.svg';

function Footer() {
  return (
    <Container>
        <div className='socialMedia'>
            <img src={instagram} alt="instagram logo" />
            <img src={twitter} alt="twitter logo" />
            <img src={facebook} alt="facebook logo" />
            <img src={Pinterest} alt="Pinterest logo" />
        </div>
        <nav className='navLinks'>
            <ul>
                <li><a href='#About'>About</a></li>
                <li><a href='#Recipes'>Recipes</a></li>
                <li><a href='#Subscribe'>Subscribe</a></li>
            </ul>
        </nav>
    </Container>
  )
}

export default Footer