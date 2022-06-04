import styled from "styled-components";

export const MainContentWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem 0;
    & > * {
        margin: 0.5rem;
    }
`;

export const MainTemp = styled.p`
    font-size: 4rem;
    font-weight: 700;
`;

export const Location = styled.div`
    font-size: 3rem;
`;

export const City = styled.p`
    font-size: 2rem;
    font-weight: 700;
`;

export const Desc = styled.p`
    align-self: center;
`;