import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const Slot = ({ slotNumber }) => {
  const [droppedCustomer, setDroppedCustomer] = useState(null);

  const [{ isOver }, drop] = useDrop({
    accept: 'CUSTOMER',
    drop: (item) => {
      setDroppedCustomer(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const backgroundColor = isOver ? '#f0f0f0' : '#ffffff';

  return (
    <div ref={drop} style={{ backgroundColor }} className="planner-slot">
      Slot {slotNumber}
      {droppedCustomer && <p>{droppedCustomer.name}</p>}
    </div>
  );
};

export default Slot;
