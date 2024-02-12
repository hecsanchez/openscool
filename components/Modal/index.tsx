import {
  ModalBackground,
  ModalContent,
  ModalWrapper,
} from '@/components/Modal/styled';
import { createPortal } from 'react-dom';
import { FC, PropsWithChildren } from 'react';
import { Card, CardContent } from '@/components/Card';

interface ModalProps extends PropsWithChildren {
  show: boolean;
  onClose: () => void;
}
const Modal: FC<ModalProps> = ({ show, onClose, children }) => {
  return (
    show &&
    createPortal(
      <ModalWrapper>
        <ModalBackground onClick={onClose} />
        <ModalContent>
          <Card>
            <CardContent>{children}</CardContent>
          </Card>
        </ModalContent>
      </ModalWrapper>,
      document.body,
    )
  );
};

export default Modal;
