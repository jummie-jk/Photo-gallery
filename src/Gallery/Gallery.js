import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/?client_id=bwvn3vutNdD2HBOPq_bxn-RHj9dQGiFADGnPDxqtj8c'
        );

        const fetchedImages = response.data.map((image) => ({
          src: image.urls.regular,
          description: image.alt_description || 'No description',
          id: image.id,
        }));

        setImages(fetchedImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredImages = images.filter((image) =>
    image.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
        <div id='gallery--text'>
            <h2>Gallery</h2>
        </div>
      <div className="container input-block" id='gallery-input'>
        <input
          type="text"
          placeholder="Search by description tag..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className='gallery-input'
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid-container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-container grid-item">
                {image.src ? (
                <img src={image.src} className='image' alt={image.description} />
                ) : (
                <div className="image-not-found">Image not found</div>
                )}
              <div className="image-description">Tag: {image.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;






