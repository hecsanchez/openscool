import SearchWrapper from "@/components/Search/Search.styled";
import Image from "next/image";
import searchIcon from '@/assets/svg/search.svg';

const Search = () => {
    return (
        <SearchWrapper>
            <Image src={searchIcon} width={20} heig={20} alt='search icon'/>
            <input type="text"/>
        </SearchWrapper>
    )
}

export default Search;