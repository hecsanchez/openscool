import NavButtonsWrapper from "./styled";
import {FC} from "react";
import Button from "@/components/Button";

interface NavButtonProps {
    hasSession?: boolean;
}
const NavButtons: FC<NavButtonProps> = ({ hasSession = false }) => {
    return (
        <NavButtonsWrapper>
            {hasSession ? (
                <div></div>
            ) : (
                <>
                    <Button $secondary>Signup</Button>
                    <Button $secondary>Login</Button>
                </>
            )}
        </NavButtonsWrapper>
    )
}

export default NavButtons;