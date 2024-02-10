import styled from '@emotion/styled'

const ButtonWrapper = styled.button`
  border-radius: 5px;
  border: 1px solid;
  height: 45px;
  padding: 0 20px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  
  ${({ secondary }) => secondary ? `
      border-color: #b4b4b4;
      color: #b4b4b4;
      background: #ffffff;
      transition: all .2s ease;
      
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