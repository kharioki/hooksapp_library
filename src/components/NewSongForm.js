import React, { useState } from 'react';

function NewSongForm({ addSong }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type="text"
        required
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <input type="submit" value="Add Song" />
    </form>
  );
}

export default NewSongForm;
