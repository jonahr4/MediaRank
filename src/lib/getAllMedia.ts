import getCollection, { MEDIA_COLLECTION } from "@/db";
import { MediaItem } from "@/types";

// reads the whole library. library page and rank page can both call this
export default async function getAllMedia(): Promise<MediaItem[]> {
  const media = await getCollection(MEDIA_COLLECTION);
  const data = await media.find().toArray();

  const items: MediaItem[] = data.map((item) => ({
    id: item._id.toHexString(),
    title: item.title,
    type: item.type,
    source: item.source,
    externalId: item.externalId,
    image: item.image,
    status: item.status,
    rank: item.rank,
    plannedDate: item.plannedDate,
    notes: item.notes,
  }));

  return items;
}
