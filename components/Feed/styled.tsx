import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media screen and (min-width: 767px) {
    grid-column: 1 / span 7;
    display: grid;
    gap: 15px;
  }
`;

export default FeedWrapper;
