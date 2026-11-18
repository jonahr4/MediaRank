"use client";

import styled from "styled-components";

// top bar. not a feature, just so every page has the name
// owner: shared setup

const Head = styled.header`
    background-color: #667db8;
    color: #ffffff;
    padding: 12px 1%;
`;

const Title = styled.h1`
    font-size: calc(16px + 1vw);
`;

export default function Header() {
    return (
        <Head>
            <Title>MediaRank</Title>
        </Head>
    );
}
