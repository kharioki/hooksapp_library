import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

function SongList() {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'Joro', id: uuidv1() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
}

export default SongList;
