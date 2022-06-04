import styled from "styled-components";

export const HeaderWrap = styled.div`
    padding: 5rem 0;
    & p {
        margin: 1rem 0;
    }
    @media ${({theme}) => theme.mobile} {
        padding: 3rem 0;
    }
`;
