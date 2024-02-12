import NavButtonsWrapper from './styled';
import { FC, useState } from 'react';
import Button from '@/components/Button';
import LoginModal from '@/components/LoginModal';

interface NavButtonProps {
  hasSession?: boolean;
}
const NavButtons: FC<NavButtonProps> = ({ hasSession = false }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <NavButtonsWrapper>
        {hasSession ? (
          <div></div>
        ) : (
          <>
            <Button $secondary>Signup</Button>
            <Button $secondary onClick={handleShowLogin}>
              Login
            </Button>
          </>
        )}
      </NavButtonsWrapper>
      <LoginModal show={showLogin} onClose={handleCloseLogin} />
    </>
  );
};

export default NavButtons;
