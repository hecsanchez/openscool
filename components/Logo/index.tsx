import OpenSchoolLogo from "@/assets/img/OpenScool.png";
import Image from "next/image";
import LogoWrapper from "@/components/Logo/styled";

const Logo = () => {
    return (
        <LogoWrapper>
            <Image src={OpenSchoolLogo} alt="OpenSchool logo"/>
        </LogoWrapper>
    )
}

export default Logo;