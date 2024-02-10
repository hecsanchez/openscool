import {NavBarContent, NavBarWrapper} from "@/components/NavBar/NavBar.styled";
import Nav from "@/components/Nav/Nav";
import {FC} from "react";
import Logo from "@/components/Logo/Logo";
import NavButtons from "@/components/NavButtons/NavButtons";
import Search from "@/components/Search/Search";

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