import { SearchBarWrap, SearchButton, SearchForm, SearchImg, SearchInput } from "./styled/SearchBar.styled";
import SearchIcon from "../assets/images/search.svg"
import { useState } from "react";

const SearchBar = ({ getData }) => {

    const [location, setLocation] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        getData(location);
        setLocation('');
    }

    return (
        <SearchBarWrap>
            <SearchForm>
                <SearchInput type="text" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                <SearchButton type="submit" onClick={handleClick}><SearchImg src={SearchIcon}></SearchImg></SearchButton>
            </SearchForm>
        </SearchBarWrap>
    );
}
 
export default SearchBar;