import React from 'react'
import { Container } from './styles'

function Subscribe() {
  return (
    <Container id='Subscribe'>
        <h2>Subscribe</h2>
        <p>Sign up for newsletter</p>
        <form>
            <input className='email' type="email" name="email" placeholder='Your Email' id="email" />
            <input type="submit" value="Submit" className='btn' />
        </form>
    </Container>
  )
}

export default Subscribe