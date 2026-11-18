"use client";

import styled from "styled-components";

// library
// owner: unassigned
// this page should list everything in the media collection.
// call getAllMedia() from the page (server) and pass the array in as props.
// show title, type, status, and rank. the rank number comes from the rank page.
// planned dates belong on the calendar, goals belong on the goals page.

const Box = styled.section`
  width: 80vw;
  margin: 24px auto;
  background-color: white;
  border: 2px solid #5a6fa8;
  padding: 16px;
`;

const Line = styled.p`
  margin-top: 10px;
`;

export default function Library() {
  return (
    <Box>
      <h2>Library</h2>
      <Line>
        placeholder. once items are saved, map over them here.
      </Line>
      <Line>
        each one should show the title, whether it is a movie show book or game,
        and its rank if the rank page has set one. status starts as want.
      </Line>
    </Box>
  );
}
