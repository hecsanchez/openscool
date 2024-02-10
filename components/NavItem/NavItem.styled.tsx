import styled from '@emotion/styled'
import Link from "next/link";

const NavItemWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px;
  border-bottom: 2px solid;
  border-color: ${({active})=> active ? 'black' : 'transparent'};
  text-decoration: none;
  color: ${({active})=> active ? '#323232' : '#b4b4b4'};
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