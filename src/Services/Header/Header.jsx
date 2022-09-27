import React from "react";
import styled from "styled-components";
import Imagem from "../../assets/RC.svg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2%;
    height: 80px;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;

    i{
        color: #373737;
        font-size: 30px;
        display: none;
    }


    @media(max-width: 768px){
        i{
            display: block;
        }
    }
`;

export const Dedy = styled.ul`
    display:flex;
    list-style:none;
    gap: 20px;
    align-items: center;

    li{
        cursor: pointer;
    }

    li:last-child{
        border: 3px solid #373737;
        padding: 7px 15px;
        transition: all ease-in 0.3s;

        :hover{
                background-color: #373737;
                color: white;
        }
    }

    @media(max-width: 768px){
        display: none;
    }
`
export const Img1 = styled.img`
width: 50px;
`;

export default function Header(){

//     const [scrollPosition, setScrollPosition] = useState(0);
        
    
//     const handleScroll = () => {
//         const position = window.scrollY;
//         setScrollPosition(position);
//     };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


    return (
       
        <Container>
            <figure>
                <Img1 src={Imagem} alt="logo" />
            </figure>
            
            <nav>
                <Dedy>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                </Dedy>
            </nav>

            <i class="fa-solid fa-bars"></i>
        </Container>
       
    )
}
