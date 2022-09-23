import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DFE4DE;
    padding-block: 100px;

    h2{
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 15px;
    }

    p{
        font-size: 32px;
        letter-spacing: 2px;
        margin-bottom: 40px;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input.email{
            height: 70px;
            width: 60%;
            margin-bottom: 40px;
            border: none;
            outline: none;
            padding-left: 20px;
            font-size: 18px;
        }

        input.btn{
            width: 130px;
            height: 40px;
            border: 3px solid #373737;
            text-transform: uppercase;
            letter-spacing: 5px;
            cursor: pointer;
            transition: all ease-in 0.3s;
            font-weight: 600;

            :hover{
                background-color: #373737;
                color: white;
            }
        }
    }


    @media(max-width:768px){
        h2{
            font-size: 35px;
        }

        p{
            font-size: 28px;
        }

        form{
            input.email{
                width: 90%;
            }
        }
    }
`;