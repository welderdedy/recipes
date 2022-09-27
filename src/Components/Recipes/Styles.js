import styled from "styled-components";
import imagemDeFundo from '../../assets/Grupo-de-máscara-2.png'


export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imagemDeFundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    
    h1{
        font-size: 150px;
        text-transform: uppercase;
        font-weight: 400;
    }

    @media(max-width: 700px){
        h1{
            font-size: 40px;
        }
    }
`;

export default Container;