import { Draggable } from '@hello-pangea/dnd';

import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ text, index }) {
  return (
    <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          {text}
        </div>
      )}
    </Draggable>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
