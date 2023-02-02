import React, { useState, useEffect } from 'react';

const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);

  const handleTitleEdit = (id, newTitle) => {
    const updatedPhotos = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, title: newTitle };
      }
      return photo;
    });

    setPhotos(updatedPhotos);

    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        
      },
      body: JSON.stringify({ title: newTitle }),
    })
    .then((response) => response.json())
    .then((data) => setPhotos(data));
        
  };

  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <img src={photo.url} alt={photo.title} />
          <h3>{photo.title}</h3>
          <input
            type="text"
            defaultValue={photo.title}
            onBlur={event => handleTitleEdit(photo.id, event.target.value)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Photo;
