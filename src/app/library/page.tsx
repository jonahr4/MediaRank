/*
  library page
  shows saved media and the rank from the rank page.
  when this gets wired up, call getAllMedia() here and pass the list into Library.
  force-dynamic so a refresh sees new mongo rows (same reason as mp-4).
*/

import Library from "@/components/Library";

export const dynamic = "force-dynamic";

export default function LibraryPage() {
  return (
    <Library />
  );
}
