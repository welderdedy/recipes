import styled from "styled-components";


export const Container = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5%;

    .socialMedia{
        display: flex;
        gap: 10px;

        img{
            width: 50px;
            height: 50px;
        }
    }

    .navLinks{
        padding-block: 70px;
        ul{
            list-style: none;
            display: flex;
            gap: 50px;

            li{
                font-size: 24px;
                letter-spacing: 2px;
                text-transform: uppercase;

                a{
                    text-decoration: none;
                }
            }
        }
    }


    @media(max-width:768px){
        flex-direction: column-reverse;
        padding-block: 40px;

        .navLinks{
            ul{
                flex-direction: column;
                gap: 30px;
                align-items: center;
            }
        }
    }
`;