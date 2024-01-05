import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [customerName, setCustomerName] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handlePickupChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDropOffChange = (e) => {
    setDropOffLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: customerName,
          pickup: pickupLocation,
          dropOff: dropOffLocation,
        }),
      });

      if (response.ok) {
        const successMessage = await response.text();

        onRegister(successMessage);

        setCustomerName('');
        setPickupLocation('');
        setDropOffLocation('');

        setSuccessMessage(successMessage);
      } else {
        console.error('Failed to register customer');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='card mb-3'>
      <div className='card-header'>
        <h5>Register New Customer</h5>
      </div>
      <div className='card-body'>
        {successMessage && (
          <div className='alert alert-success' role='alert'>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='customerName'>Customer Name:</label>
            <input
              type='text'
              id='customerName'
              className='form-control'
              value={customerName}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='pickupLocation'>Pickup Location:</label>
            <input
              type='text'
              id='pickupLocation'
              className='form-control'
              value={pickupLocation}
              onChange={handlePickupChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='dropOffLocation'>Drop-off Location:</label>
            <input
              type='text'
              id='dropOffLocation'
              className='form-control'
              value={dropOffLocation}
              onChange={handleDropOffChange}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
