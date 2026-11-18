"use client";

import { createGlobalStyle } from "styled-components";

// one global style for the whole app. pages should not add another css file
// owner: shared setup

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f2f2f2;
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;
