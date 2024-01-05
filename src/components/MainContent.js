import React, { useState } from 'react';
import Table from './Table';
import { Planner } from './Planner';
import RegistrationForm from './RegistrationForm';

export const MainContent = () => {
  const [customerQueue, setCustomerQueue] = useState([]);

  const handleRegister = (customer) => {
    setCustomerQueue((prevQueue) => [
      ...prevQueue,
      { id: Date.now(), ...customer },
    ]);
  };

  return (
    <div
      className='main-container mt-2'
      style={{ maxWidth: '70%', margin: '0 auto' }}>
      <div className='row mt-4'>
        <div className='col-lg-6 col-md-12'>
          <RegistrationForm onRegister={handleRegister} />
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-lg-6 col-md-12'>
          <div className='card'>
            <div className='card-header'>
              <h5>Logistic Queue</h5>
            </div>
            <div className='card-body'>
              <Table customerQueue={customerQueue} />
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-12'>
          <div className='card'>
            <div className='card-header'>
              <h5>Planner</h5>
            </div>
            <div className='card-body'>
              <Planner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
