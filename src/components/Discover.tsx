"use client";

import { useState } from "react";
import styled from "styled-components";

// discover
// owner: unassigned
// search box for now. real search should happen in a server function
// so an api key (tmdb etc) never sits in the browser.
// books and games might be a different api, or people can just type the title
// and call addMedia(title, type). suggestions can be added on this page later.

const Box = styled.section`
    width: 80vw;
    margin: 24px auto;
    background-color: #d7e3f8;
    padding: 16px;
`;

const Field = styled.input`
    display: block;
    width: 100%;
    margin: 8px 0;
    padding: 8px;
    font-size: 16px;
`;

const Button = styled.button`
    background-color: #5a6fa8;
    color: white;
    border: none;
    padding: 8px 16px;
    margin-top: 8px;
`;

const Note = styled.p`
    margin-top: 12px;
`;

export default function Discover() {
    const [query, setQuery] = useState("");
    const [note, setNote] = useState("");

    return (
        <Box>
            <h2>Discover</h2>
            <p>search for a movie, show, book, or game and add it to the library.</p>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    // placeholder until the api call exists
                    setNote("not hooked up yet. you searched: " + query);
                }}
            >
                <Field
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit" disabled={query.trim() === ""}>
                    Search
                </Button>
            </form>
            {note !== "" && <Note>{note}</Note>}
        </Box>
    );
}
