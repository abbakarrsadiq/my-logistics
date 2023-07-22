import React from 'react'
import moment from 'moment';
import Slot from './Slot'

export const Planner = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days').format('MMM D');
      dates.push(date);
    }
  return (
    <div className="planner">
      <div className="planner-header">
        <h5>Planner</h5>
      </div>
      <div className="planner-body">
        {dates.map((date, index) => (
          <div key={index} className="planner-day">
            <h6>{date}</h6>
            <div className="planner-slots">
              <Slot slotNumber={1} />
              <Slot slotNumber={2} />
              <Slot slotNumber={3} />
              <Slot slotNumber={4} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
