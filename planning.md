## Music Playlist Explorer — Planning Spec

### Data Shape
    All playlist cards should include a cover image, a playlist name, an author, and a like button, which also displays like count. When a playlist is clicked on, it should include a cover image, a name, an author, a shuffle button, a list of songs (including song title, artist, and duration), a like button for the playlist and for each song, a delete button, an edit button, and description.

### UI and Interaction Rules
**Main sections of the homepage:** The main sections of the homepage are the search bar, list of current playlists, sorting option for the current playlists, a create custom & random playlist button, and feautured playlist section.
**When a user clicks a playlist card:** When a user hovers on a playlist card, the card will slightly lift and glow. When it is clicked, it will spin from its place on the screen to the 
**When a user clicks outside the modal:** When the clicks outside of the modal, the current modal being highlighted is exited out of.
**When a user clicks the like icon:** When a song is liked, it is added to a playlists of liked songs (playlist is created if it isn't already present).
**Shuffle button function:** When the user clicks shuffle, the songs in the playlist will play in a random order depending on a the randomized chronlogical number a song is assigned.

### Function Specs

**shuffleArray**
- Parameters: `array` — any array of song objects
- Updates: nothing in place; returns a new shuffled copy using the Fisher-Yates algorithm so the original playlist order is preserved in `playlistData`
- Display format: the modal or featured song list re-renders in the new random order
- Constraints: does not mutate the source array; original order is restored if the modal is closed and reopened

**Like (handleLikeClick)**
- Parameters: `event` — the click event; `playlistId` — numeric key into `playlistData`; `songIndex` — optional, if provided targets a song like instead of the playlist like
- Updates: toggles `.liked` class on the button, swaps heart icon between ♡ and ♥, increments or decrements the displayed count, and updates the corresponding `likes` field in `playlistData`
- Display format: heart icon turns red when liked; count displayed inline next to the heart
- Constraints: `stopPropagation` is called to prevent the card click from also firing; like state is in-memory only and resets on page reload

**Delete**
- Parameters: none — uses `currentPlaylistId` from module scope
- Updates: removes the playlist entry from `playlistData`, removes the matching `.playlist-card` element from the DOM, and closes the modal
- Display format: a confirmation dialog appears before deletion with "No" and "Yes" buttons; clicking outside the dialog dismisses it
- Constraints: requires user confirmation before deleting; only works when a modal is open (i.e. `currentPlaylistId` is set)

**Edit (toggleEditMode)**
- Parameters: none — reads and writes `currentPlaylistId` and `isEditMode` from module scope
- Updates: on enter edit mode — replaces the title `<h2>`, creator `<p>`, and description `<p>` with editable inputs, re-renders song list with drag handles and delete buttons, changes Edit button text to "Save"; on save — writes updated title, creator, and description back to `playlistData`, restores display elements, re-renders song list in view mode
- Display format: editable fields use white-bordered inputs on the gold header background; song rows show a drag handle and trash button instead of a like button
- Constraints: shuffle is disabled while in edit mode; `isEditMode` must be false when the modal is opened so it always starts in view mode

**Create (createNewPlaylist)**
- Parameters: reads `new-playlist-title` and `new-playlist-description` input values and the `newPlaylistSongs` array from module scope
- Updates: adds a new entry to `playlistData` at `nextPlaylistId`, appends a new card `<li>` to `.playlist-grid`, wires up click and like handlers on the new card, increments `nextPlaylistId`, re-sorts the grid, and closes the create modal
- Display format: new card appears in the grid following the current sort order; a placeholder cover image is generated from the playlist title
- Constraints: title is required; at least one song must be added before saving; creator defaults to "You"

**openModal (modal population)**
- Parameters: `playlistId` — numeric key into `playlistData`
- Updates: sets `currentPlaylistId`, resets `isEditMode` to false, populates the modal title, creator, description, and cover image from `playlistData`, re-renders the song list in view mode, and attaches like handlers to all song buttons
- Display format: modal overlay becomes visible (`display: grid`); all fields reflect the selected playlist's current data
- Constraints: does nothing if `playlistId` is not found in `playlistData`; always opens in view mode regardless of prior edit state

**getRandomFeaturedPlaylist**
- Parameters: none
- Updates: nothing in `playlistData`; returns a random integer between 0 and 7 inclusive
- Display format: used by `renderFeaturedPage` and `updateFeaturedCard` to pick which playlist to feature on page load
- Constraints: range is hardcoded to 0–7 matching the 8 seed playlists; newly created playlists are not eligible to be featured

**getPlaylistDescription**
- Parameters: `playlistId` — numeric key into `playlistData`
- Updates: sets the description text in the modal (`.modal-description`) or featured page (`#featured-description`) to "Generating description..." while the request is in flight, then overwrites it with the generated text and saves it back to `playlist.description`
- Display format: 2–3 sentence description of the playlist's vibe written in an engaging style; also updates the edit textarea if currently in edit mode
- Constraints: see AI Feature Spec below; falls back to a template string if `API_KEY` is undefined; sets description to failure message if the API call errors

### AI Feature Spec (Milestone 8)
**Role** The AI acts as a playlist copywriter — it generates a short, evocative description of the playlist's vibe based on the songs provided.
**Provider** OpenRouter API (`https://openrouter.ai/api/v1/chat/completions`) using model `openai/gpt-3.5-turbo`. API key is optional and is read from a local untracked global `API_KEY` value when present; if missing, the app uses the built-in fallback behavior.
**Task** Given the playlist title, creator, and full song list (title, artist, duration), generate a 2–3 sentence description of the playlist's mood and energy that makes someone want to listen.
**Inputs** Playlist title and creator name from `playlistData`; song details formatted as `"<title>" by <artist> (<duration>)` joined by commas. Sent as a single user message to the chat completions endpoint.
**Output format** A 2–3 sentence plain-text description in an engaging, creative tone. Example: *This playlist, "yoncé," is a fun playlist that details some of Beyoncé's best songs. Be ready to get up and dance along to the upbeat songs in this playlist!*
**Constraints**
- Do not list individual songs by name
- Do not use generic or boring language
- Do not invent a vibe or genre that doesn't match the actual artists and songs
- `max_tokens` is set to 150 to allow full sentences without cutting off
- `temperature` is set to 0.9 for varied, creative output
**Failure behavior** If `API_KEY` is undefined, a fallback template string is returned after a 1.5 second simulated delay. If the API call returns a non-OK status or throws, the description is set to "AI-generated description could not be provided at this time." and the error is logged to the console.

### Decisions Log
**Milestone 1**
    - On the first try, the model followed the wireframe too percisely, and I had to provide it with a wireframe that had more color and instructions to make the site more palatable.
    - I told Claude to add more roundness to the stylization of the website and make it more streamline with my vision of the website.
**Milestone 7**
    - When the featured page was first generated, Claude created a separate playlist for the feautured playlist. I told it to use the already generated playlists to highlight a random featured playlist on this specific page.
    - The modified formatting of the featured page to make it align with the formatting of the "All Playlists" page of the wesbsite.

### Data Schema
playlists:
    - name (string) — name of the plalist
    - description (string) — description of the plalist
    - songs (array of objects) - songs in the playlist
        * name (string) - name of the songs
        * artist (string) - song artist
        * duration (string) - duration of song