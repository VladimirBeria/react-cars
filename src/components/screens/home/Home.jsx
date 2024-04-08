import { useState } from 'react';
import { CarItem } from './car-item/CarItem.jsx';

const cars = [
  {
    id: 1,
    name: 'Porsche 911',
    price: 125000,
    image: '/cars/porsche911.jpg',
  },
  {
    id: 2,
    name: 'BMW M3',
    price: 115000,
    image: '/cars/bmwM3.webp',
  },

  {
    id: 3,
    name: 'BMW M2',
    price: 95000,
    image: '/cars/bmwM3.webp',
  },
];

function Home() {
  return (
    <>
      <h1>Cars Catalog</h1>
      <div>
        {cars.length ? cars.map((car) => (
            <CarItem key={car.id} car={car} />
          ),
        ) : 'No cars available.'}
      </div>
    </>
  );
}

export default Home;
