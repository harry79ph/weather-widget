import styled from "styled-components";
import Img from "../../assets/images/background.jpg"

export const Container = styled.div`
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    text-align: center;
    background-image: url(${Img});
    background-color: #34495e;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;