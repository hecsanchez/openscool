import LayoutWrapper from "@/components/Layout/Layout.styled";
import Nav from "@/components/Nav/Nav";
import NavBar from "@/components/NavBar/NavBar";
import {FC} from "react";

const Layout: FC = ({ children }) => {
    return (
        <main>
            <LayoutWrapper>
                <NavBar/>
                {children}
            </LayoutWrapper>
        </main>
    )
}

export default Layout;