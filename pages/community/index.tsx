import {Layout} from "@/components";
import {NextPage, NextPageContext} from "next";
import ContentWrapper from "@/components/Wrapper/styled";
import SplitLayout from "@/components/SplitLayout/styled";
import Feed from "@/components/Feed";

import {Post} from "@/types/Post";
import {Site} from "@/types/Site";

import posts from '@/data/posts';
import site from "@/data/site";
import SiteInfo from "@/components/SiteInfo";
import {useRouter} from "next/router";
interface CommunityPageProps {
    posts: Post[];
    site: Site;
    page: number;
    total: number;
}

const Community: NextPage<CommunityPageProps> = ({
    posts,
    site,
    page,
    total
}) => {
    const router = useRouter();

    const handleNext = () => {
        router.push({
            pathname: router.pathname,
            query: { page: page + 1 }
        });
    }

    const handlePrevious = () => {
        router.push({
            pathname: router.pathname,
            query: { page: page - 1 }
        });
    }

    const handleGoToPage = (newPage: number) => {
        router.push({
            pathname: router.pathname,
            query: { page: newPage }
        });
    }

    const totalPages = Math.round(total / 20);

    return (
        <Layout>
            <ContentWrapper>
                <SplitLayout>
                    <Feed
                        posts={posts}
                        currentPage={page}
                        totalPages={totalPages}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        onPageClick={handleGoToPage}
                    />
                    <SiteInfo data={site}/>
                </SplitLayout>
            </ContentWrapper>

        </Layout>
    );
}

export default Community

export async function getServerSideProps(ctx: NextPageContext) {

    // TODO: Connect to server
    const query = ctx.query;
    const page = Number(query.page ?? 1);
    const total = 180;
    const totalPages = Math.round(total / 20);

    if (page > totalPages) {
        return {
            redirect: {
                permanent: false,
                destination: "/community"
            }
        }
    }

    return {
        props: { posts, site, page, total }
    };
}