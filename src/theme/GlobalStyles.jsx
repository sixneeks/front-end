import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
    }

    /* input color 고정 */
    body input {
        color: #000000
    }
`;
