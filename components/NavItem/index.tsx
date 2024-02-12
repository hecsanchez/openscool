import styled from 'styled-components';
import Link from 'next/link';

interface NavItemWrapperProps {
  $active: boolean;
}

const NavItemWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  text-decoration: none;
  color: ${(props: NavItemWrapperProps) =>
    props.$active ? '#323232' : '#b4b4b4'};
  font-weight: 500;
  font-size: 16px;
  transition: color 0.2s ease;
  position: relative;

  @media screen and (min-width: 767px) {
    font-size: 18px;
  }

  &:after {
    ${props =>
      props.$active &&
      `
        content: '';
        bottom: 0;
        border-bottom: 4px solid;
        border-color: black;
        width: 100%;
        display: block;
        position: absolute;
        
          @media screen and (min-width: 767px) {
            bottom: -10px;
          }
    `}
    
  }

  &:hover {
    color: #323232;
  }

  &:focus {
    color: #323232;
  }
`;

export default NavItemWrapper;
