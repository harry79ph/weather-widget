import { SearchBarWrap, SearchButton, SearchForm, SearchImg, SearchInput } from "./styled/SearchBar.styled";
import SearchIcon from "../assets/images/search.svg";
import React, { useState } from "react";

interface SearchBarProps {
    setLocation: (text: string) => void;
}

const SearchBar = ({ setLocation }: SearchBarProps) => {

    const [inputText, setInputText] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText) {
            setLocation(inputText);
        }
        setInputText("");
    }

    return (
        <SearchBarWrap>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput type="text" placeholder="Enter Location" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                <SearchButton type="submit"><SearchImg src={SearchIcon} alt="search"></SearchImg></SearchButton>
            </SearchForm>
        </SearchBarWrap>
    );
}
 
export default SearchBar;