import React, { useState } from 'react';
import { Dragger } from './Dragger';

const Table = () => {
  const customers = [
    { id: 1, name: 'Ummi', pickUp: 'Lekki Phase I', dropOff: 'Banana Island' },
    { id: 2, name: 'Bola', pickUp: 'Ikeja', dropOff: 'Ajegunle' },
    { id: 3, name: 'Sadiq', pickUp: 'Sango Ota', dropOff: 'Lekki Phase II' },
    { id: 4, name: 'Hasiya', pickUp: 'Agege', dropOff: 'Obalende' },
    { id: 5, name: 'Adaobi', pickUp: 'Pindiga', dropOff: 'Gombe' },
    { id: 6, name: 'Musa', pickUp: 'Kashere', dropOff: 'Pindiga' },
    { id: 7, name: 'Bello', pickUp: 'Lekki Phase I', dropOff: 'Banana Island' },
    { id: 8, name: 'Ahmad', pickUp: 'Ikeja', dropOff: 'Ajegunle' },
    { id: 9, name: 'Jenifa', pickUp: 'Apapa', dropOff: 'Lekki Ibeju' },
    { id: 10, name: 'Ikechuwu', pickUp: 'Isolo', dropOff: 'Oshodi' },
    { id: 11, name: 'Kemi', pickUp: 'Badagry', dropOff: 'Oshodi' },
    { id: 12, name: 'David', pickUp: 'Iyana Ipaja', dropOff: 'Surulere' },
    {
      id: 1,
      name: 'Muhammad',
      pickUp: 'Lekki Phase I',
      dropOff: 'Banana Island',
    },
    { id: 13, name: 'Bola', pickUp: 'Ikeja', dropOff: 'Ajegunle' },
    { id: 14, name: 'Ummi', pickUp: 'Sango Ota', dropOff: 'Lekki Phase II' },
    { id: 15, name: 'Hasiya', pickUp: 'Agege', dropOff: 'Obalende' },
    { id: 16, name: 'Adaobi', pickUp: 'Pindiga', dropOff: 'Gombe' },
    { id: 17, name: 'Musa', pickUp: 'Kashere', dropOff: 'Pindiga' },
    {
      id: 18,
      name: 'Muhammad',
      pickUp: 'Lekki Phase I',
      dropOff: 'Banana Island',
    },
  ];

  const [slotCustomers, setSlotCustomers] = useState({});

  const handleDrop = (slotNumber, customer) => {
    setSlotCustomers((prevSlotCustomers) => ({
      ...prevSlotCustomers,
      [slotNumber]: customer,
    }));
  };
  return (
    <div className='table-responsive' style={{ backgroundColor: '#red' }}>
      <table className='table table-borderless table-striped'>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Pickup Location</th>
            <th>Drop-Off Location</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>
                <Dragger
                  customer={customer}
                  onDrop={(slotNumber) => handleDrop(slotNumber, customer)}
                />
              </td>
              <td>{customer.pickUp}</td>
              <td>{customer.dropOff}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
};

export default Table;
