import { LayoutWrapper, BottomContent } from '@/components/Layout/styled';
import NavBar from '@/components/NavBar';
import { FC } from 'react';

const Layout: FC<any> = ({ children }) => {
  return (
    <main>
      <LayoutWrapper>
        <NavBar />
        <BottomContent>{children}</BottomContent>
      </LayoutWrapper>
    </main>
  );
};

export default Layout;
