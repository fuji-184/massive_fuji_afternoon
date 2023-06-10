import React, { useState } from 'react';

function MusicPlayer() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePlay = () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
  };

  return (
    <div className="pemutar">
      <h1>Upload File Musik Di Sini</h1>
      <input className="upload" type="file" accept="audio/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <audio id="audioPlayer" controls>
            <source src={URL.createObjectURL(selectedFile)} />
          </audio>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
