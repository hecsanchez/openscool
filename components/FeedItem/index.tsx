import {CardContent, Card} from "@/components/Card";
import {FC} from "react";
import {PinnedHeader, Summary, Title, UserInfo} from "./styled";
import {User} from "@/types/User";
import Image from "next/image";
import pushPinIcon from '@/assets/svg/pushpin.svg'
import Avatar from "@/components/Avatar";
import formatDate from "@/utils/formatDate";

interface PostItemProps {
    user: User;
    title: string;
    content: string;
    upvotes: number;
    comments: number;
    contributors: User[];
    pinned: boolean;
    created: string;
}
const PostItem: FC<PostItemProps> = ({
  user,
  title,
  content,
  upvotes,
  comments,
  contributors,
  pinned = false,
  created
}) => {
    return (
        <Card style={pinned ? { background: `#fff9e5`} : {}}>
            {pinned && (
                <PinnedHeader>
                    <Image src={pushPinIcon} width={15} height={15} alt="pinned"/>
                    <span>Pinned</span>
                </PinnedHeader>
            )}
            <CardContent style={pinned ? { paddingTop: 16} : {}}>
                <UserInfo>
                    <Avatar url={user.metadata.pictureThumbnail}/>
                    <div>
                        <p>{user.firstName} {user.lastName}</p>
                        <span>{formatDate(created)}</span>
                    </div>
                </UserInfo>
                <Title>{ title }</Title>
                <Summary>{ content }</Summary>
            </CardContent>
        </Card>
    )
}

export default PostItem;