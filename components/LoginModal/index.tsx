import Modal from '@/components/Modal';
import { FC } from 'react';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}
const LoginModal: FC<LoginModalProps> = ({ show, onClose }) => {
  return <Modal show={show} onClose={onClose}></Modal>;
};

export default LoginModal;
