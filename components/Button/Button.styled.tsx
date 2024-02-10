import styled from "styled-components";

interface ButtonWrapperProps {
  secondary?: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  border-radius: 5px;
  border: 1px solid;
  height: 45px;
  padding: 0 20px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  
  ${({ secondary = false }) => secondary ? `
      border-color: #b4b4b4;
      color: #b4b4b4;
      background: #ffffff;
      transition: border-color, color .2s ease;
      
      &:hover {
        color: #323232;
        border-color: #323232;
      }
  ` : `
      border-color: #ff6134;
      color: #ffffff;
      background: #ff6134;
      
      &:hover {
        color: #323232;
      }
  `}
`;

export default ButtonWrapper;