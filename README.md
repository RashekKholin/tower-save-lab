# The Perfect Blueprint

A browser-local save editor and expandable player resource for The Perfect Tower II.

## Structure

- `/`: home
- `/tools/`: tools directory
- `/tools/save-editor/`: save editor
- `/guides/`: published guides
- `/walkthroughs/`: published walkthroughs (explicit empty state until content is added)
- `content/guides.json`: content catalog
- `content/*.html`: article bodies and editor template
- `build.cjs`: shared page shell, navigation and static page generation
- `dist/`: deployable files; editor assets live here

## Add a guide or walkthrough

1. Write the article body in `content/my-topic.html`. Use heading levels starting at h2.
2. Add a catalog entry with a unique lowercase hyphenated `slug`, `title`, `description`, `topic`, `kind` (`guides` or `walkthroughs`), `published`, and `body` filename.
3. Run `node build.cjs`. Only published entries generate pages and directory cards.
4. Commit the article, catalog and generated dist pages. Render currently serves committed dist assets and automatically deploys main. For builds that generate pages on Render, use `node build.cjs && node --check dist/app.js && node --check dist/codec.js`.

## Check locally

Run `node build.cjs`, then `node --check dist/app.js` and `node --check dist/codec.js`. Serve dist with any static HTTP server; root-relative links require an HTTP origin.
Run `node test.cjs PATH_TO_PRIVATE_SAVE` and `node ui-test.cjs PATH_TO_PRIVATE_SAVE` for codec and UI logic checks. Never commit player saves. UI tests use a DOM stub and do not replace browser visual testing.

## Save handling

Processing stays in the browser. Originals are preserved and downloads create a new file. Custom unsupported records are preserved. Advanced byte editing requires format knowledge. The editor does not guarantee game-level consistency or platform achievements.

Independent of Fire Sword Studios.
