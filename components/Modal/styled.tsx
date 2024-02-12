import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBackground = styled.div`
  background-color: #4e4b44b8;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
  inset: 0;
`;

export const ModalContent = styled.div``;
