import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Colors';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    nav ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    body {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        background-color: ${COLORS.primary100};
        font-weight: 700;
        padding: 4rem 1.5rem 4.4375rem 1.5rem;
        color: ${COLORS.primary700}
        }
`;
