import {Layout} from "@/components";
import {NextPage} from "next";
import ContentWrapper from "@/components/Wrapper/styled";
import SplitLayout from "@/components/SplitLayout/styled";
import Feed from "@/components/Feed";

import {Post} from "@/types/Post";
import {Site} from "@/types/Site";

import posts from '@/data/posts';
import site from "@/data/site";
interface CommunityPageProps {
    posts: Post[];
    site: Site;
}

const Community: NextPage<CommunityPageProps> = ({ posts, site }) => {
    return (
        <Layout>
            <ContentWrapper>
                <SplitLayout>
                    <Feed posts={posts} />
                </SplitLayout>
            </ContentWrapper>

        </Layout>
    );
}

export default Community

export async function getServerSideProps() {

    return {
        props: { posts, site }
    };
}