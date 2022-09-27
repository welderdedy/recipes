import React from "react";
import styled from "styled-components";
import Imagem3 from "../../assets/pexels-karolina-grabowska-4199094.png";


export const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   figure{
      width: 50%;

      img{
         width: 100%;
      }
   }

   div.content{
      width:50%;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-inline: 7%;
      align-items: center;

      h2{
         margin-bottom: 10px;
         font-size: 40px;
         text-transform: uppercase;
      }

      .little-dash{
         width: 52px;
         height: 3px;
         background-color: #373737;
         margin-bottom: 31px;
      }

      p{
         text-align: justify;
         font-size: 20px;
      }
   }

   @media(max-width: 900px){
      flex-direction: column;

      figure{
         width: 100%;
      }

      div.content{
         width: 100%;
         padding-block: 70px;
      }
   }
`;

export default function About(){
 return(
    <Container>
      <figure>
         <img src={Imagem3} alt="img" />
      </figure>
      <div className="content">
         <h2>About</h2>
         <div className="little-dash"></div>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
      </div>
    </Container>
 )
}