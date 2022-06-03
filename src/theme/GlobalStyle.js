import { createGlobalStyle } from "styled-components";
import InkFree from "../assets/fonts/InkFree.woff";
import InkFree2 from "../assets/fonts/InkFree.woff2";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Ink Free";
        src: url(${InkFree2}) format('woff2'),
        url(${InkFree}) format('woff');
    }
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Ink Free", sans-serif;
        color: #fff;
    }
    html, body {
        height: 100%;
        line-height: 1.2;
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        font: inherit;
    }
    p {
        font-size: 1.2rem;
    }
    ol, ul, li {
        list-style: none;
    }
    button {
        font-weight: 700;
        border-radius: 2px;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
    }
    img {
        border-style: none;
    }
    /* Remove the inner border and padding in Firefox. */
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    textarea {
        overflow: auto;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
`;

export default GlobalStyle;
