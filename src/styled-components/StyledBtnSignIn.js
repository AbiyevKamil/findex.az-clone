import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 0px 24px;
  min-width: 140px;
  font-weight: 500;
  transition: background-color 0.3s ease 0s;
  color: rgb(101, 101, 101);
  height: 46px;
  background: rgb(234, 234, 234);
  box-shadow: transparent 0px 0px 0px;
  border: 0px solid transparent;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: rgb(202, 202, 202);
  }
`;

const StyledBtnSignIn = ({ children }) => <StyledBtn>{children}</StyledBtn>;

export default StyledBtnSignIn;
