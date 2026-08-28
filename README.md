# Victory Life Durant — Weekly Announcements Page

A single, lightweight page showing the top 3 announcements from this
week's service. Designed to be updated in under a minute, from your
phone, using Claude.

## How it's built (and why it's easy to maintain)

Two files do all the work:

- **`index.html`** — the design. You should almost never need to touch this.
- **`content.js`** — the words. This is the only file you edit week to week.

Because the content lives in its own tiny file, updating the page is
just "replace this one small file" — there's no way to accidentally
break the layout while typing up announcements.

## One-time setup: hosting it on GitHub Pages

1. Create a free GitHub account if you don't have one: github.com
2. Create a new repository — name it something like `vlchurch-weekly`.
   Public repository, no need to add a README (you already have one).
3. Upload `index.html` and `content.js` to the repo (drag-and-drop
   works fine on GitHub's website — click "Add file" → "Upload files").
4. In the repo, go to **Settings → Pages**. Under "Source," choose the
   `main` branch and `/ (root)` folder, then save.
5. GitHub gives you a URL that looks like:
   `https://[your-username].github.io/vlchurch-weekly/`
   That's your live page.
6. Add that link to your lnk.bio/vlchurch page.

That's it — this only needs to be done once.

## The weekly update (repeat this every week)

You don't need to know code. Each week:

1. Open a Claude chat.
2. Paste the current `content.js` (open it on GitHub and copy the text,
   or just say "here's last week's file" and paste it).
3. Tell Claude the 3 announcements for this week and the date, e.g.:

   > Update this week's announcements. Week of September 6.
   > 1. Fall kickoff picnic — Sunday after service, bring a side dish. Link: sign-up form URL
   > 2. New members class starts this Wednesday at 6:30pm in room 4. No link.
   > 3. Food pantry needs volunteers this Saturday morning. Link: volunteer form URL

4. Claude hands you back a complete, ready-to-use `content.js`.
5. On GitHub, open `content.js` in your repo, click the pencil (edit)
   icon, delete everything, paste in the new version, and click
   "Commit changes."
6. The live page updates automatically within a minute or two — no
   other steps needed.

### Tips for keeping it fast and clean

- Stick to 3 items — that's the whole point of the page (so no one has
  to dig through a long list).
- Keep each detail to 1–2 sentences. People are reading this on their
  phone, often quickly.
- A link is optional per item — most weeks probably won't need one.
- If you want to reuse this exact prompt every week, save it as a note
  on your phone and just swap in the new details each time.

## Files in this folder

- `index.html` — the page itself
- `content.js` — this week's announcements (edit this one)
- `README.md` — this file
