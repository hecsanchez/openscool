import styled from "styled-components";
import ContentWrapper from "@/components/Wrapper/Wrapper.styled";

export const NavBarWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 0 5px 0 #ebebeb;  
`

export const NavBarContent = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 20px 0;
  align-items: center;
`