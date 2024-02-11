import styled from "styled-components";

interface ButtonWrapperProps {
  $secondary?: boolean;
}

const Button = styled.button<ButtonWrapperProps>`
  border-radius: 5px;
  border: 1px solid;
  height: 45px;
  padding: 0 20px;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  letter-spacing: .5px;
  
  ${({ $secondary = false }) => $secondary ? `
      border-color: #b4b4b4;
      color: #b4b4b4;
      background: #ffffff;
      transition: border-color .2s ease, color .2s ease;
      
      &:hover {
        color: #323232;
        border-color: #323232;
      }
  ` : `
      border-color: #ff6134;
      color: #ffffff;
      background: #ff6134;
      transition: background .2s ease, box-shadow .2s ease;
      
      &:hover {
        background: #e15229;
        box-shadow: 0 2px 5px 0 #dddddd;
      }
  `}
`;

export default Button;