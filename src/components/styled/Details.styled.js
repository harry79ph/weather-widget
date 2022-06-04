import styled from "styled-components";

export const DetailstWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem auto 2rem;
    width: 40rem;
    backdrop-filter: blur(3px);
    border-radius: 10px;
    background: ${props => props.theme.colors.background};
    @media ${({theme}) => theme.mobile} {
        width: 20rem;
        margin: 3rem auto 2rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    grid-row-gap: 0;
    @media ${({theme}) => theme.mobile} {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;
    padding: 0.5rem 1rem;
    &:nth-child(-n+4) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    @media ${({theme}) => theme.mobile} {
        &:nth-child(-n+6) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    }
`;

export const CardTitle = styled.p`
    font-weight: 700;
    margin-right: 2rem
`;