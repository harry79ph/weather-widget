import { SearchBarWrap, SearchButton, SearchForm, SearchImg, SearchInput } from "./styled/SearchBar.styled";
import SearchIcon from "../assets/images/search.svg"

const SearchBar = () => {
    return (
        <SearchBarWrap>
            <SearchForm>
                <SearchInput type="text" placeholder="Enter Location" />
                <SearchButton type="submit"><SearchImg src={SearchIcon}></SearchImg></SearchButton>
            </SearchForm>
        </SearchBarWrap>
    );
}
 
export default SearchBar;