"use server";

import getCollection, { MEDIA_COLLECTION } from "@/db";

// returns "" if it saved, otherwise a short error
// discover can call this after a search, or if someone just types a title
export default async function addMedia(title: string, type: string): Promise<string> {
  if (title.trim() === "") {
    return "title cant be empty";
  }

  if (type !== "movie" && type !== "tv" && type !== "book" && type !== "game") {
    return "type has to be movie, tv, book, or game";
  }

  const media = await getCollection(MEDIA_COLLECTION);

  const res = await media.insertOne({
    title: title,
    type: type,
    source: "",
    externalId: "",
    image: "",
    status: "want",
    rank: 0,
    plannedDate: "",
    notes: "",
  });

  if (!res.acknowledged) {
    return "could not save";
  }

  return "";
}
