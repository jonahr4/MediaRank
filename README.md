# MediaRank

a place to track movies, shows, books, and games.

## pages

- `/` discover. search and add something to the library
- `/library` everything you saved, plus the rank
- `/calendar` pick a day to watch, read, or play it
- `/goals` counts for the year, like 5 movies
- `/rank` this or that, then the library can show the order

put your name in the owner comment of the component you take.

## setup

1. `npm install`
2. copy `.env.example` to `.env.local`
3. put your mongo connection string in `MONGO_URI` (same steps as the mongo lecture / mp-5)
4. `npm run dev`

mongo helpers are in `src/db.ts`, `src/lib/getAllMedia.ts`, and `src/lib/addMedia.ts`.
the pages do not call them yet, so the app still opens before the database is filled in.
