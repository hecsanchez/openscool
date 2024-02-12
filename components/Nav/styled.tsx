import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 767px) {
    gap: 20px;
  }
`;

export default NavWrapper;
