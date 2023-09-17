import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    min-height: 100%;
    box-sizing: border-box;
  }
  *, ::after, ::before{
    margin: 0;
    box-sizing: inherit;
  }

  body{
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Inter', sans-serif;
    background: rgb(86,23,128);
    background: linear-gradient(220deg, rgba(86,23,128,1) 0%, rgba(168,0,150,1) 100%);
  }`;
