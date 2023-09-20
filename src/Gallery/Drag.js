import React from 'react';
import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Item'; 

const DraggableImage = ({ image, index, onImageDrop }) => {
  const [, ref] = useDrag({
    type: ItemTypes.IMAGE,
    item: { type: ItemTypes.IMAGE, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.IMAGE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        onImageDrop(draggedItem.index, index);
        draggedItem.index = index; 
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="image-container grid-item"
      style={{ opacity: 1 }}
    >
      <img src={image.src} className='image' alt={image.description} />
      <div className="image-description">{image.description}</div>
    </div>
  );
};

export default DraggableImage;




