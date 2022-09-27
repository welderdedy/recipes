import React from "react";
import styled from "styled-components";
import Imagem3 from "../../assets/pexels-karolina-grabowska-4199094.png";

export const Img3 = styled.img`


width:50vw;
`
export const H2 = styled.h2`

position:relative;
left:1000px;
bottom:520px;

`
export const P = styled.p`

position:relative;
left:850px;
bottom:500px;
width:700vw;


`
export default function About(){
 return(
    <div>
    <Img3 src={Imagem3} alt="img" />
    <H2>ABOUT</H2>
    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi </P> 
    <P> tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem,</P>
    <P> eu tincidunt libero velit sit amet velit. Nunc in euismod </P>
    <P> Duis dapibus, elit eu eleifend tincidunt,nulla ipsum consectetur </P>
    <P> lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec</P>
    <P> mollis sagittis, enim risus euismod nisi, quis rutrum quam augue</P>
    <P> id mauris.Pellentesque mattis hendrerit semper. Orci varius</P>
    <P> natoque penatibus et magnis dis parturient montes, nascetur</P>
    <P> ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</P>
    </div>
 )
}