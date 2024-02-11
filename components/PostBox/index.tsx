import {User} from "@/types/User";
import {FC} from "react";
import Avatar from "@/components/Avatar";
import PostBoxWrapper from "@/components/PostBox/styled";

interface PostBoxProps {
    user?: User;
}
const PostBox: FC<PostBoxProps> = ({ user }) => {
    return (
        <PostBoxWrapper>
            <Avatar url={user?.metadata.pictureThumbnail} />
            <input disabled placeholder="Write something"/>
        </PostBoxWrapper>
    )
}

export default PostBox;