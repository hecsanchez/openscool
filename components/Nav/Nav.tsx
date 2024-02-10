import NavWrapper from "./Nav.styled";
import NavItem from "@/components/NavItem/NavItem.styled";
import {useRouter} from "next/router";

const Nav = () => {
    const router = useRouter();
    const isActive = (path: string) => router.pathname === path;

    return (
        <NavWrapper>
            <NavItem active={isActive('/community')} href="/community">Community</NavItem>
            <NavItem active={isActive('/classroom')} href="/classroom">Classroom</NavItem>
            <NavItem active={isActive('/members')} href="/members">Members</NavItem>
            <NavItem active={isActive('/about')} href="/about">About</NavItem>
        </NavWrapper>
    )
}

export default Nav;