import styled from "styled-components";

export const MainContentWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 3rem auto;
    max-width: 90vw;
    & > * {
        margin: 0.5rem;
    }
`;

export const WeatherIcon = styled.div`
    align-self: center;
    margin-right: -0.7rem;
    margin-bottom: -0.3rem;
`;

export const MainTemp = styled.p`
    font-size: 4rem;
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    & > p {
        font-size: 1.6rem;
    }
    @media ${({theme}) => theme.mobile} {
        flex-direction: row;
    }
`;

export const City = styled.p`
    font-weight: 700;
    @media ${({theme}) => theme.mobile} {
        margin-right: 1rem;
    }
`;
