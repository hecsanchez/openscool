import styled from 'styled-components';

const SplitLayout = styled.div`
  
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 40px;
  }
`;

export default SplitLayout;
