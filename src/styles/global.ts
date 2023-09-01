import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
} 

:root{
--white: #fff;
--black: #000;
--dark-900: #101026;
--dark-700: #1D1D2e;

--header: #DFF4FF;
--gray-100: #8A8A8A;
--gray-500: #0c0a0a8b;
--gray-000: #dedede;

--green-900: #3fffa3;
--red-900: #FF3F4B;
--red-500: #ef747c;

--gray-body: #F2F2F2;

--sub-title-table: #F9F9F9;

--button-1: #E6E6E6;
--button-1: #F2F2F2;
--button-1: #E0E0E0;
--button-1: #EEEEEE;


--gray100: #E1E1E6;
--gray200: #A9A9B2;
--gray400: #7C7C8A;
--gray500: #505059;
--gray600: #323238;
--gray700: #29292E;
--gray800: #202024;
--gray900: #121214;

--ignite300: #00B37E;
--ignite500: #00875F;
--ignite700: #015F43;
--ignite900: #00291D;

}

button{
cursor: pointer;
transition: transform 0.5s !important; 

/* // aumenta em 101% */
&:hover{
transform: scale(1.01); 
}
} 

a, Link{
color: inherit;
text-decoration: none;
} 

body{
background: var(--gray900);  
color: var(--white);
-webkit-font-smoothing: antialiased;


} 


/* // 1rem = 16px */
body, input, textarea, select, button{
font: 400 1rem Roboto, sans-serif; 
} 

/* // vai gerar 14px; */
@media (max-width: 720px){
html{
font-size: 87.5%; 
}
} 

/* // vai gerar 15px; */
@media (max-width: 1080px){
html{
font-size: 93.75%; 
}
} 
`
