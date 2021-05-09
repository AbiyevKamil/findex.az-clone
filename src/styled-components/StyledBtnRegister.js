import styled from "styled-components";

const StyledBtn = styled.button`
  background: rgba(35, 155, 212, 0.08);
  box-shadow: transparent 0px 0px 0px;
  border-width: 0px 0px 3px;
  border-style: solid;
  border-color: transparent transparent rgb(35, 155, 212);
  border-image: initial;
  text-shadow: transparent 0px 0px 0px;
  padding: 0px;
  margin: 0px;
  display: block;
  color: rgb(35, 155, 212);
  height: 72px;
  text-transform: uppercase;
  font-weight: 500;
  width: 140px;
  transition: background-color 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const StyledBtnRegister = ({ children }) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default StyledBtnRegister;
