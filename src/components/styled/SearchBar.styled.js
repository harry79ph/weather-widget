import styled from "styled-components";

export const SearchBarWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 4rem;
    padding: 0.2rem 0.3rem;
    backdrop-filter: blur(3px);
`;

export const SearchInput = styled.input`
    background: transparent;
    font-size: 1.2rem;
    padding: 0 0.8rem;
    border: 0;
    outline: none;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #fff;
    }
    :-ms-input-placeholder {
        color: #fff;
    }
`;

export const SearchButton = styled.button`
    width:2.4rem;
    height: 2.4rem;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 50%;
`;

export const SearchImg = styled.img`
    width: 1.2rem;
`;