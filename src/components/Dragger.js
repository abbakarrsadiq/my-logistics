import React from 'react';
import { useDrag } from 'react-dnd';

export const Dragger = ({ customer }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'CUSTOMER',
    item: { id: customer.id, name: customer.name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        console.log('Item dropped successfully!');
      }
    },
  }));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={(node) => preview(drag(node))} style={{ opacity }} className="draggable-customer">
          {customer.name}
    </div>
  );
};
