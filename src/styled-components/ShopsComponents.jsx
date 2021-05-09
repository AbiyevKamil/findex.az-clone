import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  padding: 30px 8vw;
  display: flex;
  justify-content: space-between;

  .left {
    width: 320px;
    /*
    .categories_container_fixed {
      position: fixed;
      top: 100px;
      margin-bottom: 400px;
    }
     */

    .categories_container {
      background-color: #FFFFFF;
      width: 320px;
      height: 460px;

      .categories_header {
        background-color: rgb(250, 250, 250);
        color: rgb(36, 68, 114);
        padding: 20px 26px;

        h1 {
          font-size: 18px;
          font-weight: 300;
        }
      }

      .category-container {
        color: rgb(36, 68, 114);
        padding: 12px 24px;
        top: 5px;

        h2 {
          font-size: 16px;
          font-weight: 300;
          cursor: pointer;
        }
      }
    }
  }

  .right {
    margin-left: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .search-container {
      margin-bottom: 15px;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .input-field {
        display: flex;
        align-items: center;
        width: 240px;
        height: 36px;
        background-color: #FFFFFF;

        input {
          padding: 6px 15px;
          outline: none;
          border: none;
        }

        .icon-container {
          background: rgb(244, 244, 244);
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(36, 68, 114);

        }
      }
    }

    .shops {
      display: grid;
      grid-template-columns: repeat(auto-fill, 250px);
      //grid-template-columns: repeat(auto-fit, 200px);
      grid-gap: 15px;
      width: 100%;

      .image-container {
        width: 200px;
        height: 100px;
        background-color: #FFF;
        padding: 12px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
