import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: none; 
  
  @media screen and (min-width: 767px) {
    position: relative;
    display: flex;
    align-items: center;

    & > img {
      position: absolute;
      left: 10px;
    }

    & > input {
      padding-left: 35px;
      background: #f5f5f5;
      border-radius: 5px;
      height: 45px;
      box-sizing: border-box;
      border: 1px solid #f5f5f5;
      transition: border-color 0.2s ease;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: #323232;
      }

      &::placeholder {
        color: #b4b4b4;
      }
    }
  }

`;

export default SearchWrapper;
