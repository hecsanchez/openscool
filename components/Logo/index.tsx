import OpenSchoolLogo from "@/assets/img/OpenScool.png";
import Image from "next/image";
import LogoWrapper from "@/components/Logo/styled";
import ContentLink from "@/components/ContentLink";

const Logo = () => {
    return (
        <ContentLink href='/'>
            <LogoWrapper>
                <Image src={OpenSchoolLogo} alt="OpenSchool logo"/>
            </LogoWrapper>
        </ContentLink>
    )
}

export default Logo;