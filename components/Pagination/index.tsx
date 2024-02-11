import {PaginationButton, PaginationWrapper} from "@/components/Pagination/styled";
import Image from "next/image";
import caretLeft from '@/assets/svg/caret.svg'
import {FC} from "react";
import PagesList from "@/components/Pagination/PagesList";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onNext: () => void;
    onPrevious: () => void;
    onPageClick: (page: number) => void;
}

interface PagesProps {

}
const Pagination: FC<PaginationProps> = ({
    totalPages = 1,
    currentPage = 1,
    onNext,
    onPrevious,
    onPageClick
}) => {

    return (
        <PaginationWrapper>
            <PaginationButton onClick={onPrevious} disabled={currentPage === 1}>
                <Image src={caretLeft} alt="previous"/>
            </PaginationButton>
            <PagesList currentPage={currentPage} totalPages={totalPages} onClick={onPageClick} />
            <PaginationButton onClick={onNext} disabled={currentPage === totalPages}>
                <Image style={{ transform: 'rotate(180deg)' }} src={caretLeft} alt="previous"/>
            </PaginationButton>
        </PaginationWrapper>
    )
}

export default Pagination;