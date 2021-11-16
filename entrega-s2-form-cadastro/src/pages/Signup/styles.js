import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 12px;
    margin: 10px;
    border: 1px solid lightblue;
    border-radius: 6px;
    font-family: "Source Sans Pro", sans-serif;
    width: 70%;
    height: 35px;
    background-color: #fff;
  }
  span {
    color: red;
    font-size: 10px;
    margin: 0 10px 0 10px;
  }
  input:hover {
    background-color: #F2D6A8;
    border-color: cyan;
    transition: 0.3s;
  }
  button {
    margin: 10px;
    background-color: #3c4997;
    border: 1px solid #3c4997;
    border-radius: 6px;
    width: 180px;
    height: 40px;
    color: #fff;
    font-size: 17px;
  }
  button:hover {
    background-color: #026012;
    border-color: #026012;
    color: #fff;
    transition: 0.5s;
  }
`;
