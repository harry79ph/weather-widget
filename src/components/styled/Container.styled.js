import styled from "styled-components";
import Img from "../../assets/images/background.jpg"

export const Container = styled.div`
    margin: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-image: url(${Img});
    background-color: #34495e;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;