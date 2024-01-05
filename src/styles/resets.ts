import {createGlobalStyle} from 'styled-components'; 


const ResetCSS = createGlobalStyle`
    html,
    body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default ResetCSS;