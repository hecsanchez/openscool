import styled from 'styled-components';
import ContentWrapper from '@/components/Wrapper/styled';

export const NavBarWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #e0dfdb;
`;

export const NavBarContent = styled(ContentWrapper)`
  padding: 10px 0;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }
`;
