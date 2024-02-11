import {PaginationButton, PaginationWrapper} from "@/components/Pagination/styled";
import Image from "next/image";
import caretLeft from '@/assets/svg/caret.svg'
import {FC} from "react";
import PagesList from "@/components/Pagination/PagesList";
import ItemsCount from "@/components/Pagination/ItemsCount";

interface PaginationProps {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    currentItems: number;
    onNext: () => void;
    onPrevious: () => void;
    onPageClick: (page: number) => void;

}

const Pagination: FC<PaginationProps> = ({
    totalItems,
    currentItems,
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
            <ItemsCount currentPage={currentPage} totalItems={totalItems} currentItems={currentItems}/>
        </PaginationWrapper>
    )
}

export default Pagination;