import styled from "styled-components";
import Link from "next/link";

interface NavItemWrapperProps {
    $active: boolean;
}

const NavItemWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px;
  border-bottom: 2px solid;
  border-color: ${(props: NavItemWrapperProps)=> props.$active ? 'black' : 'transparent'};
  text-decoration: none;
  color: ${(props: NavItemWrapperProps)=> props.$active ? '#323232' : '#b4b4b4'};
  font-weight: 500;
  font-size: 18px;
  transition: color .2s ease;
  
  &:hover {
    color: #323232;
  }
  
  &:focus {
    color: #323232;
  }
`

export default NavItemWrapper;