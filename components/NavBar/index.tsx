import {NavBarContent, NavBarWrapper} from "@/components/NavBar/styled";
import Nav from "@/components/Nav";
import {FC} from "react";
import Logo from "@/components/Logo";
import NavButtons from "@/components/NavButtons";
import Search from "@/components/Search";

const NavBar: FC = () => {
    return (
        <NavBarWrapper>
            <NavBarContent>
                <Logo/>
                <Nav/>
                <Search />
                <NavButtons/>
            </NavBarContent>
        </NavBarWrapper>
    )
}

export default NavBar;