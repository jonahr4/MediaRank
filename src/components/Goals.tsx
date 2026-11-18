"use client";

import styled from "styled-components";

// goals
// owner: unassigned
// a goal is not a media item. use the Goal type and the goals collection.
// example: watch 5 movies in 2026, read 5 books in 2026.
// count finished items (status done) of that type and compare to target.
// dont build the goal form on the library page.

const Box = styled.section`
    width: 78vw;
    margin: 24px auto;
    background-color: #d7e3f8;
    padding: 18px;
`;

const Line = styled.p`
    margin-top: 10px;
`;

export default function Goals() {
    return (
        <Box>
            <h2>Goals</h2>
            <Line>
                placeholder. let someone set a count for the year, like 5 movies or 5 books.
            </Line>
            <Line>
                store it with insertOne in the goals collection. show target next to how many are done.
            </Line>
        </Box>
    );
}
