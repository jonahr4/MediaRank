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

## one media object

a book, a game, a movie, and a tv show are the same object. `type` is just `"book"`, `"game"`, `"movie"`, or `"tv"`. rank, status, the poster string, and the planned day all work the same way. the shape is `MediaItem` in `src/types.ts`. mongo stores it in `mediarank.media`. `id` is the document `_id`, not a separate field.

```ts
const item: MediaItem = {
  id: "6afe16ca554654c4a92ac638",
  title: "Dune",
  type: "movie",
  source: "tmdb",
  externalId: "438631",
  image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  status: "want",
  rank: 0,
  plannedDate: "",
  notes: "",
};
```

a book is the same thing with a different type. nothing else changes.

```ts
const book: MediaItem = {
  id: "",
  title: "Dune",
  type: "book",
  source: "",
  externalId: "",
  image: "",
  status: "want",
  rank: 0,
  plannedDate: "",
  notes: "",
};
```

## adding media

`addMedia(title, type)` inserts one `MediaItem` into `media`. status starts as `"want"`, rank starts at `0`, and image starts as `""`. there is already one sample row in the collection, the Dune movie above.

## discover search

discover is where you look something up and then save it. the search box is not hooked to an api yet. when it is, the result should become a `MediaItem` and then get inserted. a typed-in title can skip the api and still be saved.

```ts
const found: MediaItem = {
  id: "",
  title: "The Last of Us",
  type: "game",
  source: "",
  externalId: "",
  image: "",
  status: "want",
  rank: 0,
  plannedDate: "",
  notes: "",
};
```

## poster / tmdb

for a movie or a show, a server route should call tmdb and put the poster url on `image`. the api key stays in `.env.local`. books and games can leave `image` empty, or fill it from somewhere else later. `source` says where it came from, and `externalId` is that site's id.

```ts
item.image = "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg";
item.source = "tmdb";
item.externalId = "438631";
```

## status

`status` is `"want"`, `"doing"`, or `"done"`. same three values for every type. the library can filter on it. goals count the ones that are `"done"`.

```ts
item.status = "doing";
```

## ranking

the rank page compares two items and writes a number on `rank`. `0` means it has not been sorted. a smaller number sits higher in the library. a game and a movie can be ranked the same way.

```ts
item.rank = 1;
```

## calendar

the calendar page sets `plannedDate` to a `yyyy-mm-dd` string. `""` means no day yet.

```ts
item.plannedDate = "2026-11-20";
```

## goals

a goal is not a `MediaItem`. it is a `Goal` in the `goals` collection: a type, a target count, and a year. you check it by counting media rows with that same `type` and `status: "done"`.

```ts
const goal: Goal = {
  id: "",
  type: "movie",
  target: 5,
  year: 2026,
};

const finishedMovies = library.filter(
  (item) => item.type === goal.type && item.status === "done",
);
```

## auth (to-do)

authentication is not built yet. it is the next step. signing in would give each person their own media list and goals, instead of one shared database.
