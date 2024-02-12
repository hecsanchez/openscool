import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  background-color: #f4f2ee;
  min-height: 100vh;
`;

export const BottomContent = styled.div`
  padding: 20px 0 10px;

  @media screen and (min-width: 767px) {
    padding: 40px 0 10px;
  }
`;
