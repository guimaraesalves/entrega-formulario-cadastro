import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
   background-color: #000;
    
    padding-left: 0;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
 }

 a {
   color: #f5f5f5;
   text-decoration: none;
 }
 .App-header {
  
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #000;
  
  
}
`;

export default GlobalStyle;
