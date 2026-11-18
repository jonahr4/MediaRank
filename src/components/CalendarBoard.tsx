"use client";

import styled from "styled-components";

// calendar
// owner: unassigned
// pick a media item and set plannedDate (yyyy-mm-dd).
// that field already exists on MediaItem, this page just has to update it.
// showing a real month grid can be plain divs, we dont need a calendar library.

const Box = styled.section`
    width: 80vw;
    margin: 28px auto;
    background-color: #e7e7e7;
    padding: 16px;
`;

const Line = styled.p`
    margin-top: 10px;
`;

export default function CalendarBoard() {
    return (
        <Box>
            <h2>Calendar</h2>
            <Line>
                placeholder. assign a day to watch, read, or play something from the library.
            </Line>
            <Line>
                save the day on that items plannedDate. then this page can group items by that day.
            </Line>
        </Box>
    );
}
