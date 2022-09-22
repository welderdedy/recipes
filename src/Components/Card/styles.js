import styled from "styled-components";


export const Container = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;

    figure{
        height: 50%;
        width: 100%;
        overflow: hidden;
    }

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    div.little-dash{
        width: 52px;
        height: 3px;
        background-color: #373737;
        margin-bottom: 31px;
    }

    div.content{
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3{
            font-size: 32px;
        }
    }
`;

export default Container;