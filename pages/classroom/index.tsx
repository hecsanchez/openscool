import {Layout} from "@/components";
import {NextPage, NextPageContext} from "next";
import courses from "@/data/courses";
import site from "@/data/site";
import {Course} from "@/types/Course";
import {Site} from "@/types/Site";
import CourseCard from "@/components/CourseCard";
import Grid from "@/components/Grid";
import ContentWrapper from "@/components/Wrapper/styled";
import {CardContent} from "@/components/Card";
import Pagination from "@/components/Pagination";
import {useRouter} from "next/router";

interface ClassroomProps {
    courses: Course[];
    site: Site;
    page: number;
    total: number;
}

const Classroom: NextPage<ClassroomProps> = ({
    courses,
    site,
    page,
    total
}) => {
    const router = useRouter();
    const totalPages = total > 12 ? Math.round(total / 12) : 1;

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

    return (
        <Layout>
            <ContentWrapper>
                <Grid>
                    {courses.map(course=> (
                        <CourseCard key={course.id} data={course}/>
                    ))}
                </Grid>
                <Pagination
                    totalItems={total}
                    totalPages={totalPages}
                    currentPage={page}
                    currentItems={courses.length}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    onPageClick={handleGoToPage}
                />
            </ContentWrapper>
        </Layout>
    );
}

export default Classroom;

export async function getServerSideProps(ctx: NextPageContext) {

    // TODO: Connect to server
    const query = ctx.query;
    const page = Number(query.page ?? 1);
    const total = courses.length;
    const totalPages = total > 12 ? Math.round(total / 12) : 1;

    if (page > totalPages) {
        return {
            redirect: {
                permanent: false,
                destination: "/classroom"
            }
        }
    }

    return {
        props: { courses, site, page, total }
    };
}