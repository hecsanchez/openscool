import {Layout} from "@/components";
import {NextPage, NextPageContext} from "next";
import {Course} from "@/types/Course";
import courses from "@/data/courses";

interface ClassroomProps {
    course: Course;
}

const Course: NextPage<ClassroomProps> = ({
    course,
}) => {

    return (
        <Layout>
            {course.name}
        </Layout>
    );
}

export default Course;

export async function getServerSideProps(ctx: NextPageContext) {
    const id = ctx.query.id;
    const course = courses.find(course=>course.id === id)
    return {
        props: { course }
    };
}