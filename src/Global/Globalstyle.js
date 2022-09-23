import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #373737;
    }

    html{
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;