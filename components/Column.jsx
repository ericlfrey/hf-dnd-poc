import { Droppable } from '@hello-pangea/dnd';
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function Column({ col }) {
  const { id, list } = col;
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2>{id}</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '120px',
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.map((text, index) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

// proptypes

Column.propTypes = {
  col: PropTypes.shape({
    id: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
