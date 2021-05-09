import styled from "styled-components";

export const Container = styled.div`
  margin-top: 75px;
`;
 
export const ContainerTop = styled.div`
  background-color: rgb(35, 155, 212);
  padding: 36px 0px;
  color: white;
  font-weight: 500;
  font-family: Inter, sans-serif;

  div {
    margin: 0 8vw;
  }

  h1 {
    font-weight: 300;
    font-size: 32px;
  }

  h1 b {
    font-weight: 500;
  }
`;

export const ContainerBottom = styled.div`
  margin: 50px 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .active {
    border-bottom: 2px solid rgb(36, 68, 114);
  }

  button {
    display: block;
    text-decoration: none;
    color: rgb(36, 68, 114);
    padding: 5px 0;
    margin: 10px 0;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }

  .right {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 0px 6px 24px;
    padding: 24px;
    color: rgb(36, 68, 114);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
  }
`;
