import { PaginationButton } from '@/components/Pagination/styled';
import { FC } from 'react';

interface PagesLisProps {
  totalPages: number;
  currentPage: number;
  onClick: (page: number) => void;
}
const PagesList: FC<PagesLisProps> = ({ totalPages, currentPage, onClick }) => {
  if (totalPages > 7 && currentPage < 5) {
    return (
      <>
        {Array.from(Array(5).keys()).map(page => (
          <PaginationButton
            key={page}
            $active={currentPage === page + 1}
            onClick={() => onClick(page + 1)}
          >
            {page + 1}
          </PaginationButton>
        ))}
        <span>...</span>
        <PaginationButton
          $active={currentPage === totalPages}
          onClick={() => onClick(totalPages)}
        >
          {totalPages}
        </PaginationButton>
      </>
    );
  } else if (
    totalPages > 7 &&
    currentPage >= 5 &&
    currentPage < totalPages - 3
  ) {
    return (
      <>
        <PaginationButton
          $active={currentPage === 1}
          onClick={() => onClick(1)}
        >
          1
        </PaginationButton>
        <span>...</span>
        {[currentPage - 2, currentPage - 1, currentPage].map(page => (
          <PaginationButton
            key={page}
            $active={currentPage === page + 1}
            onClick={() => onClick(page + 1)}
          >
            {page + 1}
          </PaginationButton>
        ))}
        <span>...</span>
        <PaginationButton
          $active={currentPage === totalPages}
          onClick={() => onClick(totalPages)}
        >
          {totalPages}
        </PaginationButton>
      </>
    );
  } else if (totalPages > 7 && currentPage <= totalPages) {
    return (
      <>
        <PaginationButton
          $active={currentPage === 1}
          onClick={() => onClick(1)}
        >
          1
        </PaginationButton>
        <span>...</span>
        {Array.from(Array(4).keys())
          .reverse()
          .map(page => (
            <PaginationButton
              key={page}
              $active={currentPage === totalPages - (page + 1)}
              onClick={() => onClick(totalPages - (page + 1))}
            >
              {totalPages - (page + 1)}
            </PaginationButton>
          ))}
        <PaginationButton
          $active={currentPage === totalPages}
          onClick={() => onClick(totalPages)}
        >
          {totalPages}
        </PaginationButton>
      </>
    );
  } else {
    return Array.from(Array(totalPages).keys()).map(page => (
      <PaginationButton
        key={page}
        $active={currentPage === page + 1}
        onClick={() => onClick(page + 1)}
      >
        {page + 1}
      </PaginationButton>
    ));
  }
};

export default PagesList;
