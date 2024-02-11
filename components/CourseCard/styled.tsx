import styled from "styled-components";
import {Card} from "@/components/Card";

export const CourseCardWrapper = styled(Card)`
  cursor: pointer;
  user-select: none;
  height: 100%;

  p, h2 {
    text-decoration: none;
  }
  
  &:hover {
    box-shadow: 0 2px 5px 2px #dddddd;
  }
`
export const CourseImage = styled.div`
  position: relative;
  height: 180px;
`

export const CourseTitle = styled.h2`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  color: #323232;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 5px;
`

export const CourseSummary = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height:45px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 50px;
`