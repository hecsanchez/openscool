import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 5px;
  border: 2px solid #f5f5f5;
  transition: box-shadow .2s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 2px 5px 0 #dddddd;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`
