import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export default Grid;
