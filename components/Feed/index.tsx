import PostItem from "@/components/FeedItem";
import FeedWrapper from "@/components/Feed/styled";
import {Post} from "@/types/Post";
import {FC} from "react";
import PostBox from "@/components/PostBox";
import {User} from "@/types/User";
import Pagination from "@/components/Pagination";

interface FeedProps {
    posts: Post[];
    user?: User;
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
    onPageClick: (page: number) => void;
}

const Feed: FC<FeedProps> = ({
    posts,
    user,
    currentPage,
    totalPages,
    onNext,
    onPrevious,
    onPageClick
}) => {
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
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={onNext}
                onPrevious={onPrevious}
                onPageClick={onPageClick}
            />
        </FeedWrapper>
    )
}

export default Feed;