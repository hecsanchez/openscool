import PostItem from "@/components/FeedItem";
import FeedWrapper from "@/components/Feed/styled";
import {Post} from "@/types/Post";
import {FC} from "react";
import PostBox from "@/components/PostBox";
import {User} from "@/types/User";

interface FeedProps {
    posts: Post[];
    user?: User;
}

const Feed: FC<FeedProps> = ({ posts, user }) => {
    return (
        <FeedWrapper>
            <PostBox user={user} />
            {posts.map(post=>(
                <PostItem
                    key={post.id}
                    title={post.metadata.title}
                    content={post.metadata.content}
                    comments={post.metadata.comments}
                    contributors={JSON.parse(post.metadata.contributors)}
                    upvotes={post.metadata.upvotes}
                    pinned={post.metadata.pinned === 1}
                    user={post.user}
                    created={post.createdAt}
                />
            ))}
        </FeedWrapper>
    )
}

export default Feed;