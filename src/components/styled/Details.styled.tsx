import styled from "styled-components";

export const DetailsSection = styled.div`
    padding-bottom: 3rem;
    @media ${({theme}) => theme.mobile} {
        padding-bottom: 2rem;
    }
`;

export const DetailstWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 37.5rem;
    backdrop-filter: blur(3px);
    border-radius: 10px;
    background: ${props => props.theme.colors.background};
    @media ${({theme}) => theme.mobile} {
        width: 21rem;
        backdrop-filter: blur(0);
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    grid-row-gap: 0;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    width: 12.5rem;
    padding: 0.5rem 1rem;
    &:nth-child(-n+3) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    @media ${({theme}) => theme.mobile} {
        width: 7rem;
        min-height: 3rem;
        padding: 0.2rem;
        & p {
            font-size: 1rem;
        }
    }
`;

export const CardTitle = styled.p`
    font-weight: 700;
    margin-right: auto;
    @media ${({theme}) => theme.mobile} {
        margin-right: 0.2rem;
    }
`;