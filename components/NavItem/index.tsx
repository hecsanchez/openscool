import styled from "styled-components";
import Link from "next/link";

interface NavItemWrapperProps {
    $active: boolean;
}

const NavItemWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  text-decoration: none;
  color: ${(props: NavItemWrapperProps)=> props.$active ? '#323232' : '#b4b4b4'};
  font-weight: 500;
  font-size: 18px;
  transition: color .2s ease;
  position: relative;
  
  &:after {
    ${(props) => props.$active && `
        content: '';
        bottom: -17px;
        border-bottom: 4px solid;
        border-color: black;
        width: 100%;
        display: block;
        position: absolute;
    `}
  }
  
  &:hover {
    color: #323232;
  }
  
  &:focus {
    color: #323232;
  }
`

export default NavItemWrapper;