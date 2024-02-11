import styled from "styled-components";

interface PaginationButtonProps {
    $active?: boolean;
}

export const PaginationWrapper = styled.div`
    margin: 40px 0;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const PaginationButton = styled.button<PaginationButtonProps>`
    border-radius: 100px;
    border: 0;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  
    &:disabled {
      opacity: .2;
      cursor: default;
      
      &:hover {
        background: transparent;
      }
    }
  
    ${({ $active = false }) => $active ? `
        background: #ff6e4f;
        color: #ffffff;
    ` : `
        background: transparent;
        
        &:hover {
          background: #ebebeb;
        }
    `}
`