import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';


function Youtube() {
  const [searchInput, setSearchInput] = useState('');
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const playerRef = useRef(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchYouTubeSongs = () => {
    const query = searchInput;

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&type=video&videoEmbeddable=true&maxResults=5`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const songs = data.items;
        setSongs(songs);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  };

  const decodeHtmlEntities = (text) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const stopSong = () => {
    setCurrentSong(null);
  };

  const handlePlayerReady = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Memastikan pemutaran dimulai dari detik 0
    }
  };

  return (
    <div className="container">
      <h1>YouTube Audio Player</h1>
      <div className="search-container">
        <input type="text" value={searchInput} onChange={handleSearchInput} placeholder="Cari musik" />
        <button onClick={searchYouTubeSongs}>Cari</button>
      </div>
      <div className="song-container">
        {songs && songs.map(song => (
          <div key={song.id.videoId} className="song-item">
            <h3>{decodeHtmlEntities(song.snippet.title)}</h3>
            <button onClick={() => playSong(song)}>Play</button>
          </div>
        ))}
      </div>
      <div className="player-container">
        {currentSong && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${currentSong.id.videoId}`}
            playing
            controls
            width="100%"
            height="80px"
            className="audio-player"
            onReady={handlePlayerReady}
            ref={playerRef}
          />
        )}
      </div>
      {currentSong && (
        <button onClick={stopSong}>Stop</button>
      )}
    </div>
  );
}

export default Youtube;
