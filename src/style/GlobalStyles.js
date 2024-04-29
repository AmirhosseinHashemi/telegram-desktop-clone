import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --color-gray-50: #f9fafb;
        --color-gray-100: #f1f5f9;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #6b7280;
        --color-gray-600: #4b5563;
        --color-gray-800: #1f2937;

        --color-blue-400: #60a5fa;
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
