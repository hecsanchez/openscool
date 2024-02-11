import {Card, CardContent} from "@/components/Card";
import Image from "next/image";
import {Site} from "@/types/Site";
import {FC} from "react";
import {SiteImage, SiteInfoWrapper, SiteName} from "@/components/SiteInfo/styled";
import Button from "@/components/Button";

interface SiteInfoProps {
    data: Site;
}

const SiteInfo: FC<SiteInfoProps> = ({ data: site }) => {
    return (
        <SiteInfoWrapper>
            <Card>
                <SiteImage>
                    <Image src={site.metadata.coverSmallUrl} fill alt="site cover"/>
                </SiteImage>
                <CardContent>
                    <SiteName>{site.metadata.displayName}</SiteName>
                    <p>{site.metadata.description}</p>
                    <Button>Join the community</Button>
                </CardContent>
            </Card>
        </SiteInfoWrapper>
    )
}

export default SiteInfo;