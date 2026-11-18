"use client";

import styled from "styled-components";

// rank
// owner: unassigned
// show two library items and let the user pick one (this or that).
// keep doing that and write a rank number back onto each MediaItem.
// library should read that number and list higher ranks first.
// a swipe ui is optional. two buttons is enough.

const Box = styled.section`
  width: 80vw;
  margin: 24px auto;
  padding: 16px;
  background-color: white;
  border: 3px solid gray;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
`;

const Choice = styled.button`
  flex: 1;
  padding: 28px 8px;
  background-color: #d7e3f8;
  border: 2px solid #5a6fa8;
  font-size: 16px;
`;

export default function Rank() {
  return (
    <Box>
      <h2>Rank</h2>
      <p>
        placeholder. pull two unranked (or tied) items from getAllMedia and ask which one they want more.
      </p>
      <Row>
        <Choice type="button" disabled>
          title a
        </Choice>
        <Choice type="button" disabled>
          title b
        </Choice>
      </Row>
    </Box>
  );
}
