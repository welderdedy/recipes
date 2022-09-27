import React from "react";
import styled from "styled-components";
import Imagem from "../../assets/RC.svg";
import Imagem2 from "../../assets/header.png";
export const Dedy = styled.ul`

display:flex;
justify-content:flex-end;
position:relative;
bottom:800px;
left:40px;
color:#373737;
list-style:none;
`
export const Colunas = styled.li`

padding:50px 50px 30px 50px;
`
export const Img1 = styled.img`

display:flex;
width:4vw;
position:relative;
bottom:880px;
left:40px;

`
export const Img2 = styled.img`


width:120vw;
height:120vh;
position:relative;
bottom:65px;
right:40px;

`

export default function Header(){
    return (
       
        <div>
            <figure>
            <Img2 src={Imagem2} alt="img2" />
            </figure>
            
            <nav>
            <Dedy>
                <Colunas>ABOUT</Colunas>
                <Colunas>RECIPES</Colunas>
                <Colunas>SUBSCRIBE</Colunas>
            </Dedy>
          </nav>
          <figure>
            <Img1 src={Imagem} alt="img1" />
            </figure>
          
        </div>
       
    )
}
