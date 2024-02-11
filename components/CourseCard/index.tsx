import {Card, CardContent} from "@/components/Card";
import {CourseCardWrapper, CourseImage, CourseSummary} from "@/components/CourseCard/styled";
import Image from "next/image";
import {Course} from "@/types/Course";
import {FC} from "react";
import {CourseTitle} from "./styled";
import ContentLink from "@/components/ContentLink";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";

interface CourseCardProps {
    data: Course;
}
const CourseCard: FC<CourseCardProps> = ({ data: course }) => {
    return (
        <ContentLink href={`/classroom/${course.id}`}>
            <CourseCardWrapper>
                <CourseImage>
                    <Image src={course.metadata.coverImage} style={{objectFit:"cover"}} fill alt="course cover image"/>
                </CourseImage>
                <CardContent>
                    <CourseTitle>{course.metadata.title}</CourseTitle>
                    <CourseSummary>{course.metadata.desc}</CourseSummary>
                    <ProgressBar progress={50}/>
                    <Button $secondary>Open</Button>
                </CardContent>
            </CourseCardWrapper>
        </ContentLink>
        
    )
}

export default CourseCard;