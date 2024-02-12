import { FC } from 'react';
import ItemsCountWrapper from '@/components/Pagination/ItemsCount/styled';

interface ItemsCountProps {
  totalItems: number;
  currentPage: number;
  currentItems: number;
}

const ItemsCount: FC<ItemsCountProps> = ({
  totalItems,
  currentPage,
  currentItems,
}) => {
  const startCount = currentPage === 1 ? 1 : (currentPage - 1) * 20 + 1;
  const endCount =
    totalItems <= 20
      ? totalItems
      : currentItems < 20
        ? (currentPage - 1) * 20 + currentItems
        : currentPage * 20;

  return (
    <ItemsCountWrapper>
      {startCount} - {endCount} of {totalItems}
    </ItemsCountWrapper>
  );
};

export default ItemsCount;
