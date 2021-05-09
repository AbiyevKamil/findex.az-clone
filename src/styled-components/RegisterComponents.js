import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 8vw;
  line-height: 1.2;
  font-weight: 500;

  .form-container {
    width: 100%;
    margin: 70px 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: rgb(0 0 0 / 10%) 0 6px 24px;
    background-color: rgb(255, 255, 255);

    .form-container-left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        width: 100%;
      }
    }

    .form-container-right {
      .name-surname-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        .name-field {
          width: 100%;
          position: relative;

          label {
            position: absolute;
            top: -15px;
            transition: all 0.2s ease 0s;
            color: rgb(36, 68, 114);
            text-shadow: white -1px 1px 0;
            z-index: 1;
          }

          input {
            width: 100%;
            outline: none;
            padding: 10px 0;
            border: none;
            border-bottom: 1px solid gray;
          }
        }

        .focusedName label {
          top: -200px !important;
        }

        .surname-field {
          width: 100%;
          position: relative;

          label {
            position: absolute;
            top: -15px;
            transition: all 0.2s ease 0s;
            color: rgb(36, 68, 114);
            text-shadow: white -1px 1px 0;
            z-index: 1;
          }
          

          input {
            width: 100%;
            outline: none;
            padding: 10px 0;
            border: none;
            border-bottom: 1px solid gray;
          }
        }
      }


      h1 {
        text-transform: uppercase;
        color: rgb(36, 68, 114);
        text-align: center;
        font-size: 27px;
        line-height: 1.2;
        font-weight: 500;
        margin: 30px 0;
      }
    }
  }

`
