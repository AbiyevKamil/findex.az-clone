import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 8vw;
  padding: 40px 0 20px 0;

  .main {
    max-width: 400px;
    margin: 0 auto;
    color: rgb(36, 68, 114);
  }

  .main h1 {
    color: rgb(36, 68, 114);
    margin-bottom: 40px;
    font-weight: 500;
  }

  .emailField,
  .passwordField {
    position: relative;
    font-size: 14px;
  }

  .emailField {
    margin-bottom: 50px;
    height: 45px;
    border-bottom: 2px solid gray;
  }

  .passwordField {
    display: flex;
    align-items: center;
    border-bottom: 2px solid gray;
    transition: border 0.2s linear;
  }

  .focusedPassField,
  .focusedMailField {
    border-bottom: 2px solid rgb(36, 68, 114);
  }

  .focusedPassField label,
  .focusedMailField label {
    top: -20px !important;
  }

  .focusedPassField input,
  .focusedMailField input {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .on,
  .off {
    position: absolute;
    right: 10px;
    top: 50%;
    color: gray;
    transition: all 0.2s linear;
  }

  .focusedPassField .on,
  .focusedPassField .off {
    color: rgb(36, 68, 114);
  }

  .emailField label,
  .passwordField label {
    position: absolute;
    top: -10px;
    left: 0;
    transition: top 0.2s linear;
  }

  .emailField input,
  .passwordField input {
    padding: 13px 0;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    transition: padding 0.3s linear;
  }

  .turnOn .off {
    display: none;
  }

  .turnOn .on {
    display: inline-block;
  }

  .turnOff .off {
    display: inline-block;
  }

  .turnOff .on {
    display: none;
  }

  /*   
  .turnOff .off {
    display: none !important;
    
  }

  .turnOff .on {
    display: inline-block !important;
    position: absolute;
    right: 10px;
    top: 50%;
    color: gray;
    transition: all 0.2s linear;
  }

  .turnOn .on {
    display: none !important;
    position: absolute;
    right: 10px;
    top: 50%;
    color: gray;
    transition: all 0.2s linear;
  }

  .turnOf .off {
    display: inline-block !important;
    position: absolute;
    right: 10px;
    top: 50%;
    color: gray;
    transition: all 0.2s linear;
  } */

  /* .emailField input:focus {
    border-bottom: 2px solid rgb(36, 68, 114);
  } */

  .check {
    margin-top: 25px;
    display: flex;
    align-items: center;
  }

  .check label {
    padding-left: 8px;
    line-height: 16px;
    font-size: 14px;
    user-select: none;
  }

  .check input {
    opacity: 0;
    position: absolute;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .check .checkbox-span {
    width: 18px !important;
    height: 18px !important;
    display: inline-block;
    border: 1px solid rgb(204, 207, 219);
    transition: all 0.2s ease 0s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check .checkbox-span .checkbox-img {
    width: 60%;
    fill: white;
    height: 60%;
  }

  .check .checkbox-span .checkbox-img {
    visibility: hidden;
  }

  .check input:checked+.checkbox-span {
    background-color: rgb(35, 155, 212);
  }

  .check input:checked+.checkbox-span>.checkbox-img {
    visibility: visible;
  }

  form button {
    width: 100%;
    background: rgb(35, 155, 212);
    border: none;
    margin: 0px;
    color: rgb(255, 255, 255);
    padding: 8px 13px;
    transition: background-color 0.3s ease 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    cursor: pointer;
    margin-top: 25px;
  }

  form button:hover {
    background-color: rgb(58, 184, 241);
  }

  .formBottom {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }

  .formBottom a {
    color: rgb(35, 155, 212);
    text-decoration: none;
    font-size: 14px;
  }

  .formBottom a:hover {
    color: rgb(58, 184, 241);
  }
`;
