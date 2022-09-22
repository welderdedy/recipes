import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F2F4F1;
    padding-block: 150px;


    h2{
        font-size: 40px;
        text-transform: uppercase;
    }

    div.dash{
        width: 104px;
        height: 4px;
        background-color: #373737;
        margin-top: 31px;
        margin-bottom: 104px;
    }

    div.cards{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        row-gap: 15px;
        column-gap: 40px;
        padding-inline: 2%;
    }

    @media(max-width: 768px){
        padding-block: 50px;
    }
`;