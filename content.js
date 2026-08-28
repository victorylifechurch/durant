/*
  VICTORY LIFE DURANT — WEEKLY ANNOUNCEMENTS
  ------------------------------------------
  This is the ONLY file you should need to edit week to week.
  Do not touch index.html unless you want to change the design.

  HOW TO UPDATE:
  Paste this whole file into a Claude chat and say something like:
  "Update this week's announcements. Week of Sept 6.
   1) [title] - [details] - link: [url or leave blank]
   2) ...
   3) ..."
  Claude will hand you back an updated content.js. Replace this file
  on GitHub with the new version (see README.md for how).

  RULES:
  - Keep exactly 1-3 items in the ANNOUNCEMENTS array.
  - "link" is optional — delete the whole line if there isn't one.
  - "items" is optional — a short list of extra details shown as
    small pills when the card is expanded (e.g. multiple session
    times for the same event). Delete the whole line if not needed.
  - Each card is now a tap-to-expand accordion — "detail" (and
    "items"/"link") only shows once someone taps the card.
  - Keep quotes and commas exactly as shown or the page will break.
*/

const CHURCH = {
  name: "Victory Life Durant",
  weekOf: "August 30, 2026"
};

const ANNOUNCEMENTS = [
  {
    title: "Durant Campus Vision Event",
    detail: "We believe God has an incredible season ahead for Victory Life, and we're excited to share more about where He's leading us. Join us at one of three sessions this September.",
    items: ["Sun, Sept 20 @ 3:00 PM", "Fri, Sept 25 @ 6:00 PM", "Sun, Sept 27 @ 3:00 PM"],
    link: { label: "Event details", url: "https://victorylifechurch.com/event/durant-campus-vision-event/" }
  }

  // Add up to 2 more announcements here whenever you have them —
  // just copy the block above, fill in your own title/detail/items/
  // link, and separate entries with a comma.
];


