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
  - "link" is optional — delete the whole link line if there isn't one.
  - Keep quotes and commas exactly as shown or the page will break.
*/

const CHURCH = {
  name: "Victory Life Durant",
  weekOf: "August 30, 2026"
};

const ANNOUNCEMENTS = [
  {
    title: "Sample announcement one",
    detail: "Replace this with the real detail — a sentence or two is plenty. Keep it short enough to read at a glance.",
    link: { label: "Learn more", url: "https://example.com" }
  },
  {
    title: "Sample announcement two",
    detail: "Replace this with the real detail. If there's no link for this one, just delete the whole 'link' line below.",
    link: { label: "Sign up", url: "https://example.com" }
  },
  {
    title: "Sample announcement three",
    detail: "Replace this with the real detail.",
    link: null
  }
];
