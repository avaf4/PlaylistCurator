// Sample playlist data with songs
const playlistData = {
  0: {
    title: "jhené aiko efuru chilombo",
    creator: "Namiko Browner",
    description: "Favorite songs by Jhené Aiko",
    coverImage: "assets/thumbnails/Jhene_Aiko_Playlist.jpg",
    likes: 316,
    createdAt: 0,
    songs: [
      { title: "Surrender", artist: "Jhené Aiko", duration: "4:17", thumbnail: "assets/img/song.png", likes: 15 },
      { title: "You Are Here", artist: "Jhené Aiko", duration: "3:39", thumbnail: "assets/img/song.png", likes: 23 },
      { title: "Wading", artist: "Jhené Aiko", duration: "4:36", thumbnail: "assets/img/song.png", likes: 18 },
      { title: "Pretty Bird (Freestyle)", artist: "Jhené Aiko", duration: "4:48", thumbnail: "assets/img/song.png", likes: 31 },
      { title: "Nobody", artist: "Jhené Aiko", duration: "4:16", thumbnail: "assets/img/song.png", likes: 27 }
    ]
  },
  1: {
    title: "ms. jackson",
    creator: "Blanket Jackson",
    description: "Favorite songs by Janet Jackson",
    coverImage: "assets/thumbnails/Janet_Jackson_Playlist.jpg",
    likes: 589,
    createdAt: 1,
    songs: [
      { title: "I Get Lonely", artist: "Janet Jackson", duration: "5:17", thumbnail: "assets/img/song.png", likes: 45 },
      { title: "The Pleasure Principle", artist: "Janet Jackson", duration: "4:57", thumbnail: "assets/img/song.png", likes: 38 },
      { title: "That's The Way Love Goes", artist: "Janet Jackson", duration: "4:15", thumbnail: "assets/img/song.png", likes: 41 },
      { title: "Rhythm Nation", artist: "Janet Jackson", duration: "5:30", thumbnail: "assets/img/song.png", likes: 52 },
      { title: "Control", artist: "Janet Jackson", duration: "5:53", thumbnail: "assets/img/song.png", likes: 36 }
    ]
  },
  2: {
    title: "yoncé",
    creator: "Blue I. Carter",
    description: "Favorite songs by Beyoncé",
    coverImage: "assets/thumbnails/Beyonce_Playlist.jpg",
    likes: 711,
    createdAt: 2,
    songs: [
      { title: "Dangerously In Love", artist: "Beyoncé", duration: "4:52", thumbnail: "assets/img/song.png", likes: 89 },
      { title: "Formation", artist: "Beyoncé", duration: "3:26", thumbnail: "assets/img/song.png", likes: 76 },
      { title: "Upgrade U (feat. JAY-Z)", artist: "Beyoncé", duration: "4:32", thumbnail: "assets/img/song.png", likes: 82 },
      { title: "Diva", artist: "Beyoncé", duration: "3:19", thumbnail: "assets/img/song.png", likes: 91 },
      { title: "HEATED", artist: "Beyoncé", duration: "4:20", thumbnail: "assets/img/song.png", likes: 73 }
    ]
  },
  3: {
    title: "monaleo",
    creator: "Stunna",
    description: "Favorite songs by Monaleo",
    coverImage: "assets/thumbnails/Monaleo_Playlist.jpg",
    likes: 240,
    createdAt: 3,
    songs: [
      { title: "Putting Ya Dine", artist: "Monaleo", duration: "2:59", thumbnail: "assets/img/song.png", likes: 67 },
      { title: "Ranchero", artist: "Monaleo", duration: "2:54", thumbnail: "assets/img/song.png", likes: 54 },
      { title: "First (Remix)", artist: "Monaleo", duration: "2:43", thumbnail: "assets/img/song.png", likes: 61 },
      { title: "Miss Understood", artist: "Monaleo", duration: "2:55", thumbnail: "assets/img/song.png", likes: 48 },
      { title: "Locked In", artist: "Monaleo", duration: "2:30", thumbnail: "assets/img/song.png", likes: 59 }
    ]
  },
  4: {
    title: "brent",
    creator: "London Day",
    description: "Favorite songs by Brent Faiyaz",
    coverImage: "assets/thumbnails/Brent_Faiyaz_Playlist.jpg",
    likes: 272,
    createdAt: 4,
    songs: [
      { title: "ALL MINE", artist: "Brent Faiyaz", duration: "3:35", thumbnail: "assets/img/song.png", likes: 42 },
      { title: "Been Away", artist: "Brent Faiyaz", duration: "3:43", thumbnail: "assets/img/song.png", likes: 37 },
      { title: "Clouded", artist: "Brent Faiyaz", duration: "1:49", thumbnail: "assets/img/song.png", likes: 44 },
      { title: "Best Time", artist: "Brent Faiyaz", duration: "1:22", thumbnail: "assets/img/song.png", likes: 51 },
      { title: "ROLE MODEL", artist: "Brent Faiyaz", duration: "3:13", thumbnail: "assets/img/song.png", likes: 39 }
    ]
  },
  5: {
    title: "anita b",
    creator: "Ava Flanigan",
    description: "Favorite songs by Anita Baker",
    coverImage: "assets/thumbnails/Anita_Baker_Playlist.jpg",
    likes: 425,
    createdAt: 5,
    songs: [
      { title: "Good Love", artist: "Anita Baker", duration: "5:32", thumbnail: "assets/img/song.png", likes: 55 },
      { title: "Whatever It Takes", artist: "Anita Baker", duration: "5:34", thumbnail: "assets/img/song.png", likes: 47 },
      { title: "You Bring Me Joy", artist: "Anita Baker", duration: "4:24", thumbnail: "assets/img/song.png", likes: 52 },
      { title: "Lately", artist: "Anita Baker", duration: "4:01", thumbnail: "assets/img/song.png", likes: 49 },
      { title: "Fairy Tales", artist: "Anita Baker", duration: "7:53", thumbnail: "assets/img/song.png", likes: 43 }
    ]
  },
  6: {
    title: "minnie riperton",
    creator: "Maya Rudolph",
    description: "Favorite songs by Minnie Riperton",
    coverImage: "assets/thumbnails/Minnie_Riperton_Playlist.jpg",
    likes: 664,
    createdAt: 6,
    songs: [
      { title: "Les Fleurs", artist: "Minnie Riperton", duration: "3:19", thumbnail: "assets/img/song.png", likes: 68 },
      { title: "Lovin' You", artist: "Minnie Riperton", duration: "3:43", thumbnail: "assets/img/song.png", likes: 54 },
      { title: "Baby, This Love I Have", artist: "Minnie Riperton", duration: "4:10", thumbnail: "assets/img/song.png", likes: 47 },
      { title: "Inside My Love", artist: "Minnie Riperton", duration: "4:48", thumbnail: "assets/img/song.png", likes: 41 },
      { title: "Adventures In Paradise", artist: "Minnie Riperton", duration: "3:13", thumbnail: "assets/img/song.png", likes: 50 }
    ]
  },
  7: {
    title: "future",
    creator: "Hendrix",
    description: "Favorite songs by Future",
    coverImage: "assets/thumbnails/Future_Playlist.jpg",
    likes: 888,
    createdAt: 7,
    songs: [
      { title: "Stick Talk", artist: "Future", duration: "2:50", thumbnail: "assets/img/song.png", likes: 95 },
      { title: "Like That", artist: "Future", duration: "4:27", thumbnail: "assets/img/song.png", likes: 88 },
      { title: "Mask Off", artist: "Future", duration: "3:24", thumbnail: "assets/img/song.png", likes: 79 },
      { title: "Turn On The Lights", artist: "Future", duration: "4:08", thumbnail: "assets/img/song.png", likes: 86 },
      { title: "News or Something", artist: "Future", duration: "3:33", thumbnail: "assets/img/song.png", likes: 81 }
    ]
  }
};

// Modal functionality
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-overlay .modal-close');
const modalContent = document.querySelector('.modal-content');
let currentPlaylistId = null;
let isEditMode = false;
let draggedElement = null;
let newPlaylistSongs = [];
let nextPlaylistId = 8;
let currentSort = 'popular';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function updateSongList(songs) {
  const songList = document.querySelector('.modal-song-list');
  songList.innerHTML = '';

  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.className = 'modal-song-item';
    li.dataset.songIndex = index;

    if (isEditMode) {
      li.draggable = true;
      li.innerHTML = `
        <button type="button" class="drag-handle" aria-label="Drag to reorder">☰</button>
        <img src="${song.thumbnail}" alt="" aria-hidden="true" class="song-thumb" />
        <div class="song-info">
          <p class="song-title">${song.title} - ${song.artist}</p>
          ${song.duration ? `<p class="song-duration">${song.duration}</p>` : ''}
        </div>
        <button type="button" class="delete-song-btn" aria-label="Delete song ${song.title}">🗑</button>
      `;

      // Add drag event listeners
      li.addEventListener('dragstart', handleDragStart);
      li.addEventListener('dragover', handleDragOver);
      li.addEventListener('drop', handleDrop);
      li.addEventListener('dragend', handleDragEnd);
    } else {
      li.innerHTML = `
        <img src="${song.thumbnail}" alt="" aria-hidden="true" class="song-thumb" />
        <div class="song-info">
          <p class="song-title">${song.title} - ${song.artist}</p>
          ${song.duration ? `<p class="song-duration">${song.duration}</p>` : ''}
        </div>
        <button type="button" class="song-like" aria-label="Like song ${song.title}">♡</button>
        <span class="like-count">${song.likes}</span>
      `;
    }

    songList.appendChild(li);
  });

  // Add "add song" button in edit mode
  if (isEditMode) {
    const addSongItem = document.createElement('li');
    addSongItem.className = 'add-song-item';
    addSongItem.innerHTML = `
      <button type="button" class="add-song-btn" aria-label="Add new song">+</button>
    `;
    songList.appendChild(addSongItem);

    // Add event listener for add song button
    addSongItem.querySelector('.add-song-btn').addEventListener('click', addNewSong);
  }
}

// Add like handlers to modal song buttons
function addModalSongLikeHandlers() {
  const songItems = document.querySelectorAll('.modal-song-item');
  songItems.forEach((item) => {
    const likeButton = item.querySelector('.song-like');
    const songIndex = parseInt(item.dataset.songIndex);

    if (likeButton) {
      // Remove old listener by cloning
      const newButton = likeButton.cloneNode(true);
      likeButton.parentNode.replaceChild(newButton, likeButton);

      newButton.addEventListener('click', (e) => {
        e.stopPropagation();
        handleLikeClick(e, currentPlaylistId, songIndex);
      });
    }
  });
}

function openModal(playlistId) {
  const playlist = playlistData[playlistId];
  if (!playlist) return;

  currentPlaylistId = playlistId;
  isEditMode = false;

  // Update modal content
  document.getElementById('modal-playlist-title').textContent = playlist.title;
  document.querySelector('.modal-creator').textContent = playlist.creator;
  document.querySelector('.modal-description').textContent = playlist.description;
  document.querySelector('.modal-playlist-cover').src = playlist.coverImage;
  document.querySelector('.modal-playlist-cover').alt = `Cover art for ${playlist.title}`;

  // Update song list
  updateSongList(playlist.songs);

  // Add like handlers to song buttons
  if (!isEditMode) {
    addModalSongLikeHandlers();
  }

  // Show modal
  modalOverlay.setAttribute('aria-hidden', 'false');
  modalOverlay.style.display = 'grid';
}

// Toggle edit mode
function toggleEditMode() {
  isEditMode = !isEditMode;
  const playlist = playlistData[currentPlaylistId];

  const modalHeader = document.querySelector('.modal-playlist-header');
  const titleElement = document.getElementById('modal-playlist-title');
  const creatorElement = document.querySelector('.modal-creator');
  const descriptionElement = document.querySelector('.modal-description');
  const editButton = document.querySelector('.modal-actions button:first-child');

  if (isEditMode) {
    editButton.textContent = 'Save';
    modalHeader.classList.add('edit-mode');

    // Make title editable
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'modal-playlist-title';
    titleInput.className = 'edit-title-input';
    titleInput.value = playlist.title;
    titleElement.replaceWith(titleInput);

    // Make creator editable
    const creatorInput = document.createElement('input');
    creatorInput.type = 'text';
    creatorInput.className = 'modal-creator edit-creator-input';
    creatorInput.value = playlist.creator;
    creatorElement.replaceWith(creatorInput);

    // Make description editable
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.className = 'modal-description edit-description-input';
    descriptionTextarea.value = playlist.description;
    descriptionElement.replaceWith(descriptionTextarea);

    updateSongList(playlist.songs);
    addDeleteSongHandlers();
  } else {
    const titleInput = document.getElementById('modal-playlist-title');
    const creatorInput = document.querySelector('.modal-creator');
    const descriptionTextarea = document.querySelector('.modal-description');

    // Save changes
    playlist.title = titleInput.value;
    playlist.creator = creatorInput.value;
    playlist.description = descriptionTextarea.value;

    editButton.textContent = '✍️ Edit';
    modalHeader.classList.remove('edit-mode');

    // Restore title
    const titleH2 = document.createElement('h2');
    titleH2.id = 'modal-playlist-title';
    titleH2.textContent = playlist.title;
    titleInput.replaceWith(titleH2);

    // Restore creator
    const creatorP = document.createElement('p');
    creatorP.className = 'modal-creator';
    creatorP.textContent = playlist.creator;
    creatorInput.replaceWith(creatorP);

    // Restore description
    const descriptionP = document.createElement('p');
    descriptionP.className = 'modal-description';
    descriptionP.textContent = playlist.description;
    descriptionTextarea.replaceWith(descriptionP);

    updateSongList(playlist.songs);
    addModalSongLikeHandlers();
  }
}

// Drag and drop handlers
function handleDragStart(e) {
  draggedElement = this;
  this.style.opacity = '0.5';
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (draggedElement !== this) {
    const playlist = playlistData[currentPlaylistId];
    const draggedIndex = parseInt(draggedElement.dataset.songIndex);
    const targetIndex = parseInt(this.dataset.songIndex);

    // Reorder songs array
    const [movedSong] = playlist.songs.splice(draggedIndex, 1);
    playlist.songs.splice(targetIndex, 0, movedSong);

    // Re-render song list
    updateSongList(playlist.songs);
    addDeleteSongHandlers();
  }

  return false;
}

function handleDragEnd() {
  this.style.opacity = '1';
}

// Delete song handler
function addDeleteSongHandlers() {
  const deleteButtons = document.querySelectorAll('.delete-song-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const songItem = e.target.closest('.modal-song-item');
      const songIndex = parseInt(songItem.dataset.songIndex);

      // Remove song from playlist
      const playlist = playlistData[currentPlaylistId];
      playlist.songs.splice(songIndex, 1);

      // Re-render song list
      updateSongList(playlist.songs);
      addDeleteSongHandlers();
    });
  });
}

// Add new song
function addNewSong() {
  const songTitle = prompt('Enter song title:');
  if (!songTitle) return;

  const artistName = prompt('Enter artist name:');
  if (!artistName) return;

  const duration = prompt('Enter song duration (e.g., 3:45):');

  const newSong = {
    title: songTitle,
    artist: artistName,
    duration: duration || '',
    thumbnail: 'assets/img/song.png',
    likes: 0
  };

  const playlist = playlistData[currentPlaylistId];
  playlist.songs.push(newSong);

  // Re-render song list
  updateSongList(playlist.songs);
  addDeleteSongHandlers();
}

// Delete playlist with confirmation
function deletePlaylist() {
  const playlist = playlistData[currentPlaylistId];

  // Create and show confirmation dialog
  showDeleteConfirmation(playlist.title, () => {
    // Find and remove the specific playlist card using data attribute
    const playlistCard = document.querySelector(`.playlist-card[data-playlist-id="${currentPlaylistId}"]`);
    if (playlistCard) {
      playlistCard.closest('li').remove();
    }

    // Delete from data
    delete playlistData[currentPlaylistId];

    // Close modal
    closeModal();
  });
}

// Show delete confirmation dialog
function showDeleteConfirmation(playlistTitle, onConfirm) {
  // Create overlay
  const confirmOverlay = document.createElement('div');
  confirmOverlay.className = 'confirm-overlay';

  // Create dialog
  const confirmDialog = document.createElement('div');
  confirmDialog.className = 'confirm-dialog';
  confirmDialog.innerHTML = `
    <p class="confirm-message">Are you sure you want to delete<br>"${playlistTitle}"?</p>
    <div class="confirm-buttons">
      <button type="button" class="confirm-btn confirm-no">No</button>
      <button type="button" class="confirm-btn confirm-yes">Yes</button>
    </div>
  `;

  confirmOverlay.appendChild(confirmDialog);
  document.body.appendChild(confirmOverlay);

  // Add event listeners
  const noButton = confirmDialog.querySelector('.confirm-no');
  const yesButton = confirmDialog.querySelector('.confirm-yes');

  noButton.addEventListener('click', () => {
    document.body.removeChild(confirmOverlay);
  });

  yesButton.addEventListener('click', () => {
    document.body.removeChild(confirmOverlay);
    onConfirm();
  });

  // Close on overlay click
  confirmOverlay.addEventListener('click', (e) => {
    if (e.target === confirmOverlay) {
      document.body.removeChild(confirmOverlay);
    }
  });
}

// Create Playlist Modal Functions
function openCreateModal() {
  const createModalOverlay = document.querySelector('.create-modal-overlay');
  newPlaylistSongs = [];

  // Reset form
  document.getElementById('new-playlist-title').value = '';
  document.getElementById('new-playlist-description').value = '';
  const songList = document.getElementById('create-song-list');
  if (songList) songList.innerHTML = '';

  // Show modal
  createModalOverlay.setAttribute('aria-hidden', 'false');
  createModalOverlay.style.display = 'grid';
}

function closeCreateModal() {
  const createModalOverlay = document.querySelector('.create-modal-overlay');
  createModalOverlay.setAttribute('aria-hidden', 'true');
  createModalOverlay.style.display = 'none';
}

function addSongToNewPlaylist() {
  const songTitle = prompt('Enter song title:');
  if (!songTitle) return;

  const artistName = prompt('Enter artist name:');
  if (!artistName) return;

  const duration = prompt('Enter song duration (e.g., 3:45):');

  const newSong = {
    title: songTitle,
    artist: artistName,
    duration: duration || '',
    thumbnail: 'assets/img/song.png',
    likes: 0
  };

  newPlaylistSongs.push(newSong);

  const songList = document.getElementById('create-song-list');
  if (songList) {
    const index = newPlaylistSongs.length - 1;
    const li = document.createElement('li');
    li.className = 'modal-song-item';
    li.dataset.songIndex = index;
    li.innerHTML = `
      <img src="${newSong.thumbnail}" alt="" aria-hidden="true" class="song-thumb" />
      <div class="song-info">
        <p class="song-title">${newSong.title} - ${newSong.artist}</p>
        ${newSong.duration ? `<p class="song-duration">${newSong.duration}</p>` : ''}
      </div>
      <button type="button" class="delete-song-btn" aria-label="Remove song ${newSong.title}">🗑</button>
    `;
    li.querySelector('.delete-song-btn').addEventListener('click', () => {
      newPlaylistSongs.splice(index, 1);
      li.remove();
    });
    songList.appendChild(li);
  }
}

function createNewPlaylist() {
  const title = document.getElementById('new-playlist-title').value.trim();
  const description = document.getElementById('new-playlist-description').value.trim();

  if (!title) {
    alert('Please enter a playlist title');
    return;
  }

  if (newPlaylistSongs.length === 0) {
    alert('Please add at least one song to the playlist');
    return;
  }

  // Create new playlist data
  const newPlaylist = {
    title: title,
    creator: 'You',
    description: description || 'Custom playlist',
    coverImage: 'https://placehold.co/320x320?text=' + encodeURIComponent(title),
    likes: 0,
    createdAt: Date.now(),
    songs: [...newPlaylistSongs]
  };

  // Add to playlistData
  playlistData[nextPlaylistId] = newPlaylist;

  // Create new playlist card
  const playlistGrid = document.querySelector('.playlist-grid');
  const newLi = document.createElement('li');
  newLi.innerHTML = `
    <article class="playlist-card" aria-label="Playlist by You" data-playlist-id="${nextPlaylistId}">
      <img
        src="${newPlaylist.coverImage}"
        alt="${newPlaylist.title} Playlist Cover"
        class="playlist-cover"
      />
      <div class="playlist-meta">
        <h3>${newPlaylist.title}</h3>
        <p class="creator-name">${newPlaylist.creator}</p>
        <div class="card-actions">
          <button type="button" class="like-button" aria-label="Like playlist">
            <span aria-hidden="true">♡</span>
            <span>${newPlaylist.likes}</span>
          </button>
          <button type="button" class="play-button" aria-label="Play playlist">▶</button>
        </div>
      </div>
    </article>
  `;

  playlistGrid.appendChild(newLi);

  // Add event listeners to new card
  const newCard = newLi.querySelector('.playlist-card');
  const playlistId = nextPlaylistId;

  newCard.addEventListener('click', (e) => {
    if (e.target.closest('button')) return;
    openModal(playlistId);
  });

  const likeButton = newCard.querySelector('.like-button');
  likeButton.addEventListener('click', (e) => handleLikeClick(e, playlistId));

  nextPlaylistId++;

  // Re-sort and render the grid
  sortAndRenderPlaylists();

  // Close modal
  closeCreateModal();

  alert(`Playlist "${title}" created successfully!`);
}


// Get AI-generated playlist description
async function getPlaylistDescription(playlistId) {
  const playlist = playlistData[playlistId];
  if (!playlist) return;

  // Works for both the modal and the featured page description element
  const descriptionElement =
    document.querySelector('.modal-description') ||
    document.getElementById('featured-description');
  if (descriptionElement) descriptionElement.textContent = 'Generating description...';

  try {
    const songDetails = playlist.songs.map(s =>
      `"${s.title}" by ${s.artist} (${s.duration})`
    ).join(', ');

    let generatedDescription;

    if (typeof API_KEY !== 'undefined') {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [{
            role: 'user',
            content: `Generate a fun, engaging 2-3 sentence description for this music playlist.

Playlist: "${playlist.title}" by ${playlist.creator}
Songs: ${songDetails}

Requirements:
- Capture the mood and vibe based on these specific artists and songs
- Be creative and exciting
- DON'T list individual songs
- DON'T use boring language
- DON'T make up genres or vibes that don't match the actual music

Write something that makes people want to listen immediately!`
          }],
          max_tokens: 150,
          temperature: 0.9
        })
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      generatedDescription = data.choices[0].message.content.trim();

    } else {
      await new Promise(resolve => setTimeout(resolve, 1500));
      generatedDescription = `This playlist, "${playlist.title}," created by ${playlist.creator}, features ${playlist.songs.length} amazing tracks that showcase a unique musical vibe. Get ready to enjoy the energy and rhythm as you listen through this carefully curated collection!`;
    }

    playlist.description = generatedDescription;
    if (descriptionElement) descriptionElement.textContent = generatedDescription;

    const editTextarea = document.querySelector('.edit-description-input');
    if (editTextarea) editTextarea.value = generatedDescription;

  } catch (error) {
    console.error('Error generating description:', error);
    const failureMessage = 'AI-generated description could not be provided at this time.';
    if (descriptionElement) descriptionElement.textContent = failureMessage;
    playlist.description = failureMessage;
  }
}

// Sort and render playlists
function sortAndRenderPlaylists() {
  const playlistGrid = document.querySelector('.playlist-grid');

  // Get all playlists as an array with their IDs
  const playlistArray = Object.keys(playlistData).map(id => ({
    id: parseInt(id),
    ...playlistData[id]
  }));

  // Sort based on current sort option
  switch(currentSort) {
    case 'popular':
      playlistArray.sort((a, b) => b.likes - a.likes);
      break;
    case 'recent':
      playlistArray.sort((a, b) => b.createdAt - a.createdAt);
      break;
    case 'name':
      playlistArray.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  // Clear the grid
  playlistGrid.innerHTML = '';

  // Re-render all playlists in sorted order
  playlistArray.forEach(playlist => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `
      <article class="playlist-card" aria-label="Playlist by ${playlist.creator}" data-playlist-id="${playlist.id}">
        <img
          src="${playlist.coverImage}"
          alt="${playlist.title} Playlist Cover"
          class="playlist-cover"
        />
        <div class="playlist-meta">
          <h3>${playlist.title}</h3>
          <p class="creator-name">${playlist.creator}</p>
          <div class="card-actions">
            <button type="button" class="like-button" aria-label="Like playlist">
              <span aria-hidden="true">♡</span>
              <span>${playlist.likes}</span>
            </button>
            <button type="button" class="play-button" aria-label="Play playlist">▶</button>
          </div>
        </div>
      </article>
    `;
    playlistGrid.appendChild(newLi);

    // Add event listeners to the card
    const card = newLi.querySelector('.playlist-card');
    const playlistId = playlist.id;

    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openModal(playlistId);
    });

    const likeButton = card.querySelector('.like-button');
    likeButton.addEventListener('click', (e) => handleLikeClick(e, playlistId));
  });
}

function closeModal() {
  modalOverlay.setAttribute('aria-hidden', 'true');
  modalOverlay.style.display = 'none';
}

// Close modal when clicking the close button
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside the modal content
if (modalOverlay) {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
}

// Prevent clicks inside modal content from closing the modal
if (modalContent) {
  modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

// Select a random playlist as featured
function getRandomFeaturedPlaylist() {
  const randomIndex = Math.floor(Math.random() * 8);
  return randomIndex;
}

// Update featured card on the page
function updateFeaturedCard() {
  const featuredCard = document.querySelector('.featured-card');
  if (featuredCard) {
    const featuredId = getRandomFeaturedPlaylist();
    const playlist = playlistData[featuredId];

    if (playlist) {
      const img = featuredCard.querySelector('.playlist-cover');
      const title = featuredCard.querySelector('h3');
      const creator = featuredCard.querySelector('.creator-name');
      const likeCount = featuredCard.querySelector('.like-button span:last-child');

      if (img) img.src = playlist.coverImage;
      if (img) img.alt = `${playlist.title} Playlist Cover`;
      if (title) title.textContent = playlist.title;
      if (creator) creator.textContent = playlist.creator;
      if (likeCount) likeCount.textContent = playlist.likes;

      // Update click handler to open the correct modal
      featuredCard.addEventListener('click', () => openModal(featuredId));
    }
  }
}

// Render the featured page (featured.html layout)
function renderFeaturedPage() {
  const songList = document.getElementById('featured-song-list');
  const coverImg = document.getElementById('featured-cover');
  const titleEl = document.getElementById('featured-title');
  const creatorEl = document.getElementById('featured-creator');
  const descEl = document.getElementById('featured-description');

  if (!songList) return;

  const featuredId = getRandomFeaturedPlaylist();
  const playlist = playlistData[featuredId];
  if (!playlist) return;

  if (coverImg) {
    coverImg.src = playlist.coverImage;
    coverImg.alt = `${playlist.title} Playlist Cover`;
  }
  if (titleEl) titleEl.textContent = playlist.title;
  if (creatorEl) creatorEl.textContent = playlist.creator;
  if (descEl) descEl.textContent = playlist.description;

  const editBtn = document.getElementById('featured-edit-btn');
  const deleteBtn = document.getElementById('featured-delete-btn');
  const shuffleBtn = document.getElementById('featured-shuffle-btn');
  const getDescBtn = document.getElementById('featured-get-desc-btn');

  if (editBtn) editBtn.addEventListener('click', () => openModal(featuredId));

  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      showDeleteConfirmation(playlist.title, () => {
        delete playlistData[featuredId];

        const panel = document.querySelector('.featured-page-panel');
        if (panel) {
          panel.innerHTML = '<p class="featured-empty">Featured Page is Empty</p>';
        }
      });
    });
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      renderFeaturedSongs(songList, shuffleArray(playlist.songs));
    });
  }

  if (getDescBtn) {
    getDescBtn.addEventListener('click', async () => {
      if (descEl) descEl.textContent = 'Generating description...';
      await getPlaylistDescription(featuredId);
      if (descEl) descEl.textContent = playlist.description;
    });
  }

  renderFeaturedSongs(songList, playlist.songs);
}

function renderFeaturedSongs(songList, songs) {
  songList.innerHTML = '';
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.className = 'featured-song-item';
    li.dataset.songIndex = index;
    li.innerHTML = `
      <p class="featured-song-title">${song.title} - ${song.artist}</p>
      <button type="button" class="featured-song-like" aria-label="Like song ${song.title}">♡</button>
      <span class="featured-song-count">${song.likes}</span>
    `;
    songList.appendChild(li);

    const likeBtn = li.querySelector('.featured-song-like');
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isLiked = likeBtn.classList.contains('liked');
      const countEl = li.querySelector('.featured-song-count');
      if (isLiked) {
        likeBtn.classList.remove('liked');
        likeBtn.textContent = '♡';
        countEl.textContent = parseInt(countEl.textContent) - 1;
        song.likes--;
      } else {
        likeBtn.classList.add('liked');
        likeBtn.textContent = '♥';
        countEl.textContent = parseInt(countEl.textContent) + 1;
        song.likes++;
      }
    });
  });
}

// Handle like button clicks
function handleLikeClick(event, playlistId, songIndex = null) {
  event.stopPropagation(); // Prevent card click from firing

  const button = event.currentTarget;
  const likeCountSpan = button.querySelector('span:last-child') || button.nextElementSibling;
  const heartIcon = button.querySelector('span:first-child') || button;

  // Toggle liked state
  const isLiked = button.classList.contains('liked');

  if (isLiked) {
    button.classList.remove('liked');
    heartIcon.textContent = '♡';
    if (likeCountSpan) {
      const currentCount = parseInt(likeCountSpan.textContent);
      likeCountSpan.textContent = currentCount - 1;

      // Update the data
      if (songIndex !== null) {
        playlistData[playlistId].songs[songIndex].likes--;
      } else {
        playlistData[playlistId].likes--;
      }
    }
  } else {
    button.classList.add('liked');
    heartIcon.textContent = '♥';
    if (likeCountSpan) {
      const currentCount = parseInt(likeCountSpan.textContent);
      likeCountSpan.textContent = currentCount + 1;

      // Update the data
      if (songIndex !== null) {
        playlistData[playlistId].songs[songIndex].likes++;
      } else {
        playlistData[playlistId].likes++;
      }
    }
  }
}

// Add like button handlers to cards
function addLikeHandlersToCards() {
  // Featured card like button
  const featuredCard = document.querySelector('.featured-card');
  if (featuredCard) {
    const likeButton = featuredCard.querySelector('.like-button');
    if (likeButton && !likeButton.dataset.listenerAdded) {
      likeButton.dataset.listenerAdded = 'true';
      likeButton.addEventListener('click', (e) => {
        const title = featuredCard.querySelector('h3').textContent;
        const playlistId = Object.keys(playlistData).find(
          key => playlistData[key].title === title
        );
        if (playlistId !== undefined) {
          handleLikeClick(e, parseInt(playlistId));
        }
      });
    }
  }

  // Grid playlist cards like buttons
  const playlistCards = document.querySelectorAll('.playlist-grid .playlist-card');
  playlistCards.forEach((card) => {
    const likeButton = card.querySelector('.like-button');
    if (likeButton && !likeButton.dataset.listenerAdded) {
      likeButton.dataset.listenerAdded = 'true';
      const playlistId = parseInt(card.getAttribute('data-playlist-id'));
      likeButton.addEventListener('click', (e) => handleLikeClick(e, playlistId));
    }
  });
}

// Add click handlers to playlist cards
document.addEventListener('DOMContentLoaded', () => {
  // Add data-playlist-id attributes to all cards
  const playlistCards = document.querySelectorAll('.playlist-grid .playlist-card');
  playlistCards.forEach((card, index) => {
    card.setAttribute('data-playlist-id', index);
  });

  // Update featured card with random playlist
  updateFeaturedCard();

  // Render featured page layout (featured.html only)
  renderFeaturedPage();

  // Add like button handlers
  addLikeHandlersToCards();

  // All playlist cards in the grid
  playlistCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Don't open modal if clicking a button
      if (e.target.closest('button')) return;
      const playlistId = parseInt(card.getAttribute('data-playlist-id'));
      if (playlistData[playlistId]) {
        openModal(playlistId);
      }
    });
  });

  // Featured card click handler
  const featuredCard = document.querySelector('.featured-card');
  if (featuredCard) {
    featuredCard.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      // Get the actual featured playlist ID from the data
      const title = featuredCard.querySelector('h3').textContent;
      const playlistId = Object.keys(playlistData).find(
        key => playlistData[key].title === title
      );
      if (playlistId !== undefined) {
        openModal(parseInt(playlistId));
      }
    });
  }

  // Edit button handler
  const editButton = document.querySelector('.modal-actions button:first-child');
  if (editButton) {
    editButton.addEventListener('click', toggleEditMode);
  }

  // Delete button handler
  const deleteButton = document.querySelector('.modal-actions button:nth-child(2)');
  if (deleteButton) {
    deleteButton.addEventListener('click', deletePlaylist);
  }

  // Shuffle button handler
  const shuffleButtons = document.querySelectorAll('.modal-actions button');
  shuffleButtons.forEach(button => {
    if (button.textContent.includes('Shuffle') || button.textContent.includes('🔀')) {
      button.addEventListener('click', () => {
        if (currentPlaylistId !== null && !isEditMode) {
          const playlist = playlistData[currentPlaylistId];
          if (playlist) {
            const shuffledSongs = shuffleArray(playlist.songs);
            updateSongList(shuffledSongs);
            // Re-add like handlers to song buttons after shuffle
            addModalSongLikeHandlers();
          }
        }
      });
    }
  });

  // Create Custom button handler
  const createButton = document.querySelector('.btn-create');
  if (createButton) {
    createButton.addEventListener('click', openCreateModal);
  }

  // Create modal close button
  const createModalClose = document.querySelector('.create-modal-close');
  if (createModalClose) {
    createModalClose.addEventListener('click', closeCreateModal);
  }

  // Create modal overlay click
  const createModalOverlay = document.querySelector('.create-modal-overlay');
  if (createModalOverlay) {
    createModalOverlay.addEventListener('click', (e) => {
      if (e.target === createModalOverlay) {
        closeCreateModal();
      }
    });
  }

  // Create modal add song button
  const createAddSongBtn = document.querySelector('.create-add-song-btn');
  if (createAddSongBtn) {
    createAddSongBtn.addEventListener('click', addSongToNewPlaylist);
  }

  // Create modal save button
  const createSavePlaylistBtn = document.getElementById('create-save-playlist');
  if (createSavePlaylistBtn) {
    createSavePlaylistBtn.addEventListener('click', createNewPlaylist);
  }

  // Sort dropdown handler
  const sortDropdown = document.getElementById('sort-playlists');
  if (sortDropdown) {
    sortDropdown.addEventListener('change', (e) => {
      currentSort = e.target.value;
      sortAndRenderPlaylists();
    });
  }

  // Get Description button handler
  const getDescriptionBtn = document.querySelector('.get-description-btn');
  if (getDescriptionBtn) {
    getDescriptionBtn.addEventListener('click', () => {
      if (currentPlaylistId !== null) {
        getPlaylistDescription(currentPlaylistId);
      }
    });
  }
});
