// shared shapes
// movies, shows, books, and games all go in MediaItem
// goals are separate because a goal is not a title

export type MediaItem = {
  id: string;
  title: string;
  // movie, tv, book, or game
  type: string;
  // where we found it. tmdb, or just typed in
  source: string;
  externalId: string;
  image: string;
  // want, doing, or done
  status: string;
  // 0 means the rank page has not sorted it yet. smaller number = higher
  rank: number;
  // calendar uses this. "" if they didnt pick a day. yyyy-mm-dd is fine
  plannedDate: string;
  notes: string;
};

export type Goal = {
  id: string;
  // same type strings as MediaItem
  type: string;
  target: number;
  year: number;
};
