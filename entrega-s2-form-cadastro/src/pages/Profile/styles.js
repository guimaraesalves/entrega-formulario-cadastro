import styled from "styled-components";

export const UserPage = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #fff;
  text-shadow: 0.1em 0.1em 0.05em #5D1220;
  font-weight: 500px;
  text-align: center;
  
  padding-top: 20px;
  background-image: url("../../img/rosa-do-serrado.jpeg");
  background-repeat: no-repeat;

  background-position: center;
  border-color: white;
  border-radius: 6px;
  width: 50%;
  height: 600px;
  opacity: 0.8;
  margin: 0 auto;
  margin-top: 200px;

  button {
    margin-left: 33%;
    margin-top: 400px;
    background-color: #0a2419;
    border: 1px solid #0a2419;
    border-radius: 6px;
    width: 200px;
    height: 40px;
    color: gray;
    font-size: 17px;
  }
  button:hover {
    background-color: #4c5020;
    border-color: #4c5020;
    color: white;
    transition: 0.5s;
  }

`;
