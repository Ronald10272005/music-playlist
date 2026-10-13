import { useState } from "react";
import "./style.css";

function App() {
  const [search, setSearch] = useState("");

  const songs = [
    {
      title: "Kalapastangan",
      artist: "Fitterkarma",
      cover: "https://placehold.co/100x100/49323c/ffffff?text=K",
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      cover: "https://placehold.co/100x100/343434/ffffff?text=21CB",
    },
    {
      title: "Piano Man",
      artist: "Billy Joel",
      cover: "https://placehold.co/100x100/4b535d/ffffff?text=PIANO",
    },
    {
      title: "500 Miles",
      artist: "The Proclaimers",
      cover: "https://placehold.co/100x100/5d4b3e/ffffff?text=500",
    },
    {
      title: "My Way",
      artist: "Frank Sinatra",
      cover: "https://placehold.co/100x100/383838/ffffff?text=MY+WAY",
    },
    {
      title: "Panaginip",
      artist: "ILUNA",
      cover: "https://placehold.co/100x100/4a4059/ffffff?text=P",
    },
    {
      title: "I Love You So",
      artist: "The Walters",
      cover: "https://placehold.co/100x100/4c4039/ffffff?text=LOVE",
    },
  ];

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="phone">
      <h1>Listen List</h1>

      <input
        className="search"
        type="text"
        placeholder="Search songs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>My Playlist</h2>
      <p className="subtitle">{songs.length} songs · Your favorites</p>

      <div className="list-heading">TITLE</div>

      <div className="music-list">
        {filteredSongs.map((song, index) => (
          <div className="music-row" key={song.title}>
            <span className="number">{index + 1}</span>

            <img src={song.cover} alt={song.title} />

            <div className="music-details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>

            <span className="play-icon">▶</span>
          </div>
        ))}

        {filteredSongs.length === 0 && (
          <p className="empty">No songs found.</p>
        )}
      </div>

      <footer className="bottom-nav">
        <span>⌂<small>Home</small></span>
        <span>⌕<small>Search</small></span>
        <span>♙<small>Profile</small></span>
      </footer>
    </div>
  );
}

export default App;
