import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --color-gray-100: #f1f5f9;
        --color-gray-200: #e5e7eb;
        --color-gray-600: #4b5563;
        --color-gray-800: #1f2937;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Roboto", sans-serif;
        padding: 1rem;
    }

    input,
    button {
        font-family: inherit;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
