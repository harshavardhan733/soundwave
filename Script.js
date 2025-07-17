let currentView = 'all';
let favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]')); // Load favorites from localStorage

const songsContainer = document.getElementById("songs-container");
const artistList = document.getElementById("artist-list");
const trendingBtn = document.getElementById("show-trending");
const favoritesBtn = document.getElementById("show-favorites");
const recommendedContainer = document.getElementById("recommended-container");


// 🎨 Step 1: Render artist cards with photo
function populateArtistList() {
  const uniqueArtists = [];
  const artistCovers = {}; // To store a cover for each artist

  songsData.forEach(song => {
    if (!artistCovers[song.artist]) {
      artistCovers[song.artist] = song.cover;
    }
  });

  // Extract unique artists
  const artists = [...new Set(songsData.map(song => song.artist))];

  // Removed "All Artists" button as per request

  artists.forEach(artistName => {
    const card = document.createElement("div");
    card.className = "artist-card";
    card.innerHTML = `<img src="${artistCovers[artistName]}" alt="${artistName}" />
                      <p>${artistName}</p>`;
    card.addEventListener("click", () => {
      currentView = 'artist';
      renderSongs(songsData.filter(song => song.artist === artistName));
      updateActiveFilterButton(null); // No specific filter button active
    });
    artistList.appendChild(card);
  });
}

// 🎵 Step 2: Display songs
function renderSongs(songList) {
  songsContainer.innerHTML = "";

  if (songList.length === 0) {
    songsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: rgba(255,255,255,0.8);">No songs found for this selection 🎧</p>`;
    return;
  }

  songList.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
    <img src="${song.cover}" alt="${song.title}" style=" height:250px;" />

      <div class="song-details">
        <h3>${song.title}</h3>
        <p>${song.artist} • ${song.duration}</p>
      </div>
      <div class="actions">
        <button class="favorite ${favorites.has(song.id) ? "active" : ""}" data-id="${song.id}">💖</button>
        <button class="play" data-id="${song.id}">▶</button>
      </div>
    `;

    // Fav button
    const favBtn = card.querySelector(".favorite");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent card click
      toggleFavorite(song.id);
    });

    // Play button - redirect to player.html
    const playBtn = card.querySelector(".play");
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent card click
      window.location.href = `player.html?id=${song.id}`;
    });

    card.addEventListener("click", () => {
      window.location.href = `player.html?id=${song.id}`;
    });

    songsContainer.appendChild(card);
  });
}

// 🎯 Step 3: Favorites and Trending
function toggleFavorite(songId) {
  if (favorites.has(songId)) {
    favorites.delete(songId);
  } else {
    favorites.add(songId);
  }
  localStorage.setItem('favorites', JSON.stringify(Array.from(favorites))); // Save favorites
  renderSongs(filterSongs()); // Re-render current view to update favorite icons
}

function filterSongs() {
  if (currentView === 'favorites') return songsData.filter(song => favorites.has(song.id));
  if (currentView === 'trending') return songsData.filter(song => trendingIds.includes(song.id));
  return songsData;
}

// Function to update active state of filter buttons
function updateActiveFilterButton(activeButton) {
  trendingBtn.classList.remove('active-filter');
  favoritesBtn.classList.remove('active-filter');
  if (activeButton) {
    activeButton.classList.add('active-filter');
  }
}

// 🎬 Step 4: Event Listeners
trendingBtn.addEventListener("click", () => {
  currentView = 'trending';
  renderSongs(filterSongs());
  updateActiveFilterButton(trendingBtn);
});

favoritesBtn.addEventListener("click", () => {
  currentView = 'favorites';
  renderSongs(filterSongs());
  updateActiveFilterButton(favoritesBtn);
});

// Render Recommended Songs
function renderRecommendations() {
  // Shuffle songsData to get random recommendations
  const shuffledSongs = [...songsData].sort(() => 0.5 - Math.random());
  const recommended = shuffledSongs.slice(0, 4); // Get first 4 random songs

  recommendedContainer.innerHTML = ""; // Clear previous recommendations

  recommended.forEach(song => {
    const div = document.createElement("div");
    div.className = "recommend-card";

    div.innerHTML = `
      <img src="${song.cover}" alt="${song.title}" />
      <div class="recommend-details">
        <h4>${song.title}</h4>
        <p>${song.artist} • ${song.duration}</p>
      </div>
    `;

    div.addEventListener("click", () => {
      window.location.href = `player.html?id=${song.id}`;
    });

    recommendedContainer.appendChild(div);
  });
}


// 🚀 Step 5: Init App
populateArtistList();
renderSongs(songsData);
renderRecommendations();