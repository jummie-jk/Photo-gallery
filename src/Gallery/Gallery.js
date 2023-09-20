import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotFound from './NotFound';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableImage from './Drag';

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
  const handleImageDrop = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);

    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
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
        <div className=" ">
          {filteredImages.length === 0 ? (
            <div className='not--found custom-style'>
              <NotFound />
            </div>
          ) : (
             <div className="grid-container">
              {filteredImages.map((image, index) => (
                <DraggableImage
                  key={image.id}
                  image={image}
                  index={index}
                  onImageDrop={handleImageDrop}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
    </DndProvider>
  );
};

export default Gallery;






