import LayoutWrapper from "@/components/Layout/styled";
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar";
import {FC} from "react";

const Layout: FC<any> = ({ children }) => {
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