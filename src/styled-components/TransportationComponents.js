import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 8vw;
  padding: 50px 0;
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    padding: 40px;
    gap: 40px;
  }

  .left {
    background-color: rgb(244, 244, 244);
    padding: 12px 30px;
    overflow-y: scroll;
    height: 68vh;
  }

  .left ol,
  .left ul {
    padding: 0 10px;
  }

  .left * {
    font-size: 14px;
    color: rgb(101, 101, 101);
    line-height: 1.5rem;
  }

  .left h3 {
    margin-bottom: 15px;
  }

  .note {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .left p {
    margin-top: 15px;
  }

  .left ol li {
    margin-bottom: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right img {
    width: 164px;
    justify-self: center;
    flex: 1;
  }

  .right {
    color: rgb(36, 68, 114);
    margin: 0px;
  }
`;
