import SearchWrapper from '@/components/Search/styled';
import Image from 'next/image';
import searchIcon from '@/assets/svg/search.svg';

const Search = () => {
  return (
    <SearchWrapper>
      <Image src={searchIcon} width={20} height={20} alt="search icon" />
      <input type="text" placeholder="Search" />
    </SearchWrapper>
  );
};

export default Search;
